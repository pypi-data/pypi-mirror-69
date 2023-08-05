# built-in
import json
from hashlib import md5
from pathlib import Path
from secrets import token_hex
from time import localtime, strftime, time

# external
from flake8.checker import FileChecker
from flake8.options.manager import OptionManager

# app
from ._plugin import get_plugin_name, get_plugin_rules


CACHE_PATH = Path.home() / '.cache' / 'flakehell'
THRESHOLD = 3600 * 24  # 1 day


def prepare_cache(path=CACHE_PATH):
    if not path.exists():
        path.mkdir(parents=True)
        return
    for fpath in path.iterdir():
        if time() - fpath.stat().st_atime <= THRESHOLD:
            continue
        fpath.unlink()


class Snapshot:
    _exists = None
    _digest = None
    _results = None

    def __init__(self, *, cache_path: Path, file_path: Path):
        self.cache_path = cache_path
        self.file_path = file_path

    @classmethod
    def create(cls, checker: FileChecker, options: OptionManager) -> 'Snapshot':
        hasher = md5()
        # plugin info
        for chunk in checker.display_name[:-1]:
            hasher.update(chunk.encode())

        # plugins config
        plugin_name = get_plugin_name(checker.check)
        rules = get_plugin_rules(
            plugin_name=plugin_name,
            plugins=options.plugins,
        )
        hasher.update('|'.join(rules).encode())

        # file path
        file_path = Path(checker.filename).resolve()
        hasher.update(str(file_path).encode())

        return cls(
            cache_path=CACHE_PATH / (hasher.hexdigest() + '.json'),
            file_path=file_path,
        )

    def exists(self) -> bool:
        """Returns True if cache file exists and is actual.
        """
        if self._exists is not None:
            return self._exists

        if not self.cache_path.exists():
            self._exists = False
            return self._exists

        # check that file content wasn't changed since the snapshot
        cache = json.loads(self.cache_path.read_text())
        self._exists = self.digest == cache['digest']
        # if cache is valid results will be eventually requested.
        # let's save it for later use to avoid reading the cache twice
        if self._exists:
            self._results = cache['results']
        return self._exists  # type: ignore

    @property
    def digest(self):
        """Get hex digest for the current content of the file
        """
        # we cache it because it requested twice: from `exists` and from `dumps`
        if self._digest is None:
            if self.file_path.exists():
                self._digest = self.file_content_digest()
            else:
                # Cannot read file_path, likely because it's '-' for stdin
                # Invent a random digest instead
                self._digest = self.random_digest()
        return self._digest

    def dump(self, results) -> None:
        self.cache_path.write_text(self.dumps(results=results))

    def dumps(self, results) -> str:
        return json.dumps(dict(
            results=results,
            digest=self.digest,
        ))

    @property
    def results(self):
        """returns cached checks results for the given file
        """
        # results could be cached from `.exists()`.
        # however, we don't want to cache the results on requets
        # because they are always requested only once
        if self._results is not None:
            return self._results
        return json.loads(self.cache_path.read_text())['results']

    @staticmethod
    def random_digest():
        return strftime('%Y%m%d%H%M%S', localtime()) + token_hex(16)

    def file_content_digest(self):
        hasher = md5()
        hasher.update(self.file_path.read_bytes())
        return hasher.hexdigest()
