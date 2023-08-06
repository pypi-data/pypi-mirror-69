# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2020-05-25
### Added
- Manually calculate function call's hash, so you can invalidate individual entries.

### Fixed
- Check if corrupted database file exists before deleting it.
- Make compatible with Numpy by comparing cached result to None, instead of checking its truthiness from [@Evidlo](https://gitlab.com/Evidlo).

## [1.3.2] - 2019-11-06
### Fixed
- Cachalot no longer crashes if database gets corrupted mid-insert from [@Sasa-Tomic](https://gitlab.com/sasa-tomic).

## [1.3.1] - 2019-10-31
### Fixed
- Recreate database file if it gets corrupted from [@Sasa-Tomic](https://gitlab.com/sasa-tomic).

## [1.3.0] - 2019-10-14
### Added
- Option to not renew timestamp on read from [@Sasa-Tomic](https://gitlab.com/sasa-tomic).

## [1.1.0] - 2019-02-20
### Added
- Add filesize option with support infinite size as default from [@Evidlo](https://gitlab.com/Evidlo).

## [1.0.0] - 2019-01-24
### Added
- Support infinite timeouts.

### Changed
- Default timeout is now infinite.

## [0.2.0] - 2018-07-05
### Added
- If empty result is cached, optionally retry.

## [0.1.3] - 2018-05-16
### Changed
- Remove 'self' reference from key seed.

## [0.1.2] - 2018-02-28
### Fixed
- Restore compatibility with Python 3.5.

## [0.1.1] - 2018-02-11
### Changed
- Resolve the cache path absolutely.
- Expand user home in cache path.

## 0.1.0 - 2018-01-28
### Added
- Persistent caching using TinyDB.

[0.1.1]: https://gitlab.com/radek-sprta/cachalot/compare/v0.1.0...v0.1.1
[0.1.2]: https://gitlab.com/radek-sprta/cachalot/compare/v0.1.1...v0.1.2
[0.1.3]: https://gitlab.com/radek-sprta/cachalot/compare/v0.1.2...v0.1.3
[0.2.0]: https://gitlab.com/radek-sprta/cachalot/compare/v0.1.3...v0.2.0
[1.0.0]: https://gitlab.com/radek-sprta/cachalot/compare/v0.2.0...v1.0.0
[1.1.0]: https://gitlab.com/radek-sprta/cachalot/compare/v1.0.0...v1.1.0
[1.3.0]: https://gitlab.com/radek-sprta/cachalot/compare/v1.1.0...v1.2.0
[1.3.1]: https://gitlab.com/radek-sprta/cachalot/compare/v1.2.0...v1.3.1
[1.3.2]: https://gitlab.com/radek-sprta/cachalot/compare/v1.3.1...v1.3.2
[1.4.0]: https://gitlab.com/radek-sprta/cachalot/compare/v1.3.2...v1.4.0
