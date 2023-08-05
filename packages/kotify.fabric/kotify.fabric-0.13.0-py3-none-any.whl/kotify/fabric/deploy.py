import datetime
import pathlib
import random
import string
import tempfile

import invoke.exceptions

from ._core import local


class TermColors:
    HEADER = "\033[95m"
    OKBLUE = "\033[94m"
    OKGREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    ENDC = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


class BaseController:
    def __init__(self, deploy):
        self.deploy = deploy


class PipPipfilePythonController(BaseController):
    def install(self):
        self.deploy.run("PIPENV_VERBOSITY=-1 pipenv lock -r > _req.txt")
        self.deploy.run("pip install -r _req.txt", msg="pip install")
        self.deploy.run("rm _req.txt")


class DjangoController(BaseController):
    @staticmethod
    def _get_args(options=None, settings=None):
        args = options or []
        if settings:
            args.append(f"--settings {settings}")
        return args

    @staticmethod
    def _get_cmd(django_cmd, **kwargs):
        args = DjangoController._get_args(**kwargs)
        return " ".join(("django-admin", django_cmd, *args))

    def run(self, cmd, options=None, settings=None):
        self.deploy.run(
            self._get_cmd(cmd, options=options, settings=settings),
            msg=f"django-admin {cmd}",
        )

    def collectstatic(self, options=None, settings=None):
        options = ["--noinput"] if options is None else options
        self.run("collectstatic", options=options, settings=settings)

    def migrate(self, options=None, settings=None):
        options = ["--noinput"] if options is None else options
        self.run("migrate", options=options, settings=settings)


class SupervisorController(BaseController):
    def __init__(self, deploy, services, pre_stop_services=None):
        super().__init__(deploy)
        self.services = services
        self.pre_stop_services = pre_stop_services

    @staticmethod
    def _get_services(services, group):
        group = group and group.rstrip(":")
        return " ".join(":".join((group, s)) if group else s for s in services)

    def stop_app(self, group=None):
        self._pre_stop(group=group)
        services = self._get_services(self.services, group)
        self.deploy.sudo(f"supervisorctl stop {services}", msg=f"stop {services}")

    def _pre_stop(self, group=None):
        if self.pre_stop_services:
            services = self._get_services(self.pre_stop_services, group)
            self.deploy.sudo(f"supervisorctl stop {services}", msg=f"stop {services}")

    def start_app(self, group=None):
        services = self._get_services(self.services, group)
        self.deploy.sudo(f"supervisorctl start {services}", msg=f"start {services}")
        self._post_start(group=group)

    def _post_start(self, group=None):
        if self.pre_stop_services:
            services = self._get_services(self.pre_stop_services, group)
            self.deploy.sudo(f"supervisorctl start {services}", msg=f"start {services}")


class GitController(BaseController):
    def __init__(self, deploy, url, release_branch, project_dir):
        super().__init__(deploy)
        self.url = url
        self.release_branch = release_branch
        self.project_dir = pathlib.Path(project_dir)

    @property
    def is_repo_exist(self):
        try:
            self.deploy.run(f"[[ -d {self.project_dir}/.git ]]")
            return True
        except invoke.exceptions.Exit:
            pass
        try:
            self.deploy.run(f"[[ -d {self.project_dir} ]]")
        except invoke.exceptions.Exit:
            return False
        raise invoke.exceptions.Exit(
            "Project directory exists but it's not a git repo."
        )

    @property
    def is_url_match(self):
        result = self.deploy.run("git remote show origin -n")
        try:
            url = next(
                s
                for s in result.stdout.split("\n")
                if s.strip().startswith("Fetch URL: ")
            ).strip()[11:]
        except StopIteration:
            raise invoke.exceptions.Exit(
                f"`git remote show origin -n` returns invalid response:\n{result.stdout}"
            )
        return url == self.url

    def pull(self, version=None):
        if self.is_repo_exist:
            if not self.is_url_match:
                self.deploy.run(
                    f"git remote set-url origin {self.url}",
                    msg="update remote origin url",
                )
            self.deploy.run(f"git fetch origin {self.release_branch}", msg="git pull")
        else:
            self.deploy.run(f"git clone {self.url} {self.project_dir}", msg="git clone")
        if version:
            self.deploy.run(f"git checkout --force {version}")
        else:
            if self.release_branch in self._list_branches():
                self.deploy.run(f"git checkout --force {self.release_branch}")
                self.deploy.run(f"git reset --hard origin/{self.release_branch}")
            else:
                self.deploy.run(
                    f"git checkout --track -b {self.release_branch} origin/{self.release_branch}"
                )

    def _list_branches(self):
        result = self.deploy.run("git branch --no-color -a")
        branches = []
        for branch in result.stdout.split("\n"):
            branch = branch.strip()
            if branch.startswith("*"):
                branch = branch[2:]
            if branch:
                branches.append(branch)
        return branches


class BaseDeploy:
    RANDOM_CHARS = f"{string.ascii_letters}{string.digits}_"

    def __init__(self, context):
        self.context = context
        env_bin = context.server.virtualenv_dir + "/bin"
        self._cmd_prefix = (
            f"source {env_bin}/activate && cd {context.server.project_dir}"
        )

    def sudo(self, cmd, msg=None, user="root", hide=True, warn=True, **kwargs):
        if msg:
            print("*" * 80)
            print(TermColors.OKGREEN + msg + TermColors.ENDC)
            print("\n")
        result = self.context.sudo(
            f'bash -c "{cmd}"', user=user, hide=hide, warn=warn, **kwargs
        )
        if result.exited:
            print(TermColors.FAIL + result.stderr + TermColors.ENDC)
            raise invoke.exceptions.Exit("Command returned non zero code.")
        return result

    def run(self, cmd, msg=None, **kwargs):
        return self.sudo(
            f"{self._cmd_prefix} && {cmd}",
            msg=msg,
            user=self.context.server.user,
            **kwargs,
        )

    def put(self, src, dst, msg=None):
        tmp_name = f"{tempfile.gettempdir()}/{self.gen_random_string(8)}"
        user = self.context.server.user
        self.context.put(src, tmp_name)
        self.sudo(f"mv {tmp_name} {dst} && chown {user}:{user} {dst}", msg=msg)

    def rsync(self, src, dst, msg=None):
        user = self.context.server.user
        if msg:
            print("*" * 80)
            print(TermColors.OKGREEN + msg + TermColors.ENDC)
            print("\n")
        local(
            f'rsync \
                --archive \
                --compress \
                --delay-updates \
                --delete-after \
                --owner \
                --group \
                --chown={user}:{user} \
                --rsync-path="sudo rsync" \
                {src} {self.context.user}@{self.context.host}:{dst} \
            '
        )

    @classmethod
    def gen_random_string(cls, size):
        return "".join(random.choice(cls.RANDOM_CHARS) for _ in range(size))


class BackendDeploy(BaseDeploy):
    def __init__(self, context):
        super().__init__(context)
        self.django = DjangoController(self)
        self.python = PipPipfilePythonController(self)
        pre_stop_services = []
        if context.supervisor.celery_worker:
            pre_stop_services.append(f"celery_worker_{context.server.project_name}")
        if context.supervisor.celery_beat:
            pre_stop_services.append(f"celery_beat_{context.server.project_name}")
        self.supervisor = SupervisorController(
            self, [context.server.project_name], pre_stop_services=pre_stop_services
        )
        self.git = None
        if "git" in context:
            self.git = GitController(
                self, context.git.url, context.git.branch, context.server.project_dir
            )


class YarnController(BaseController):
    build_path = "./build"

    def __init__(self, deploy):
        super().__init__(deploy)

    def build(self, public_path):
        local(f"PUBLIC_PATH={public_path} yarn run build")
        return self.build_path

    def install(self):
        local("yarn install --frozen-lockfile")


class CloudflareCdnController(BaseController):
    def __init__(self, deploy, bucket, cdn_domain, release=True):
        super().__init__(deploy)
        self.cdn_domain = cdn_domain
        self.bucket = bucket
        if release:
            cdn_suffix = datetime.datetime.now().strftime("%Y%m")
            cdn_path = f"/build/{cdn_suffix}/"
        else:
            git_rev = local("git rev-parse --short HEAD", hide="out").stdout.strip()
            cdn_path = f"/build/ci/{git_rev}/"
        self.public_path = f"https://{self.cdn_domain}{cdn_path}"
        self.s3_path = f"s3://{self.bucket}{cdn_path}"

    def upload(self, path, write_upload_script=False):
        cmd = f"aws s3 sync {path} {self.s3_path} --cache-control max-age=31536000 --acl public-read"
        if write_upload_script:
            with open(pathlib.Path(path) / "upload.sh", "w") as f:
                f.write(cmd)
            local(f"chmod +x {pathlib.Path(path) / 'upload.sh'}")
        else:
            local(cmd)


class FrontendDeploy(BaseDeploy):
    def __init__(self, context, release=True):
        super().__init__(context)
        self.node = YarnController(self)
        if context.aws and context.aws.cdn_domain:
            self.cdn = CloudflareCdnController(
                self, context.aws.bucket, context.aws.cdn_domain, release=release
            )
