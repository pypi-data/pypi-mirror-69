# YouTube Scraper
> A simple command utility to extract information from the YouTube API v3 for scientific purposes.

[![made-with-python](https://img.shields.io/badge/Made%20with-Python-1f425f.svg)](https://www.python.org/)
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
[![version](https://img.shields.io/pypi/v/yt-scraper)](https://pypi.org/project/yt-scraper/)

![](data/header.png)

## About

This Python based command line utility enables the easy extraction of information from the YouTube API (Version 3). Currently, it supports only a small subset of the API interface and focuses on extracting related videos from given starting points.


## Installation

First, make sure you have a recent version of [Python 3][python-url] installed.

Next, install **yt-scraper** by using [pip][pip-url]:
```sh
sudo pip install yt-scraper
```

**Update** by adding the `--upgrade` flag:
```sh
sudo pip install --upgrade yt-scraper
```

**Windows** users may need to alter the command to:
```sh
py -m pip install --upgrade yt-scraper
```

**Mac** users may need to alter the command to:

```sh
python3 -m pip install --upgrade yt-scraper
```

### API Key

In order to use this program, you will need an official YouTube API key. 
You can obtain one from [this][yt-console-url] page and 
use it with the following examples by appending `-k <KEY>` to them.

## Usage
Currently, **yt-scraper** has two commands: *search* and *config*

The first command is used to query the YouTube API, whereas the second is used to
configure the default configuration.

The search command starts a video search from one or multiple given starting points. 
These could be multiple videos orginating from a search (using *term*),
or a provided list of video ids (using *input*), 
or just one root video (using *id* or *url*).

For example, the following command will return the first video when one searches for `cat`.

```sh
$ yt-scraper search term 'cat'
```
```
[STATUS] Result:
 Depth: 0, Rank: 0, ID: hY7m5jjJ9mM
            Title: CATS will make you LAUGH YOUR HEAD OFF - Funny CAT compilation
            Related Videos: []
```

One can also provide a video id or a video url as a starting point, 
which is more interesting when combined with the `--max-depth` option:


```sh
$ yt-scraper search id '0A2R27kCeD4' --max-depth 2
```
```
 Depth: 0, Rank: 0, ID: 0A2R27kCeD4
            Title: 🤣 Funniest 🐶 Dogs and 😻 Cats - Awesome Funny Home Animal Videos 😇
            Related Videos: ['pc8-8KfIW5c']
     Depth: 1, Rank: 0, ID: pc8-8KfIW5c
                Title: 🦁 Funniest Animals 🐼 - Try Not To Laugh 🤣 - Funny Domestic And Wild Animals' Life
                Related Videos: ['OrJMUNEyZsE']
         Depth: 2, Rank: 0, ID: OrJMUNEyZsE
                    Title: Funniest Videos for Pets to Watch Compilation | Funny Pet Videos
                    Related Videos: []
```


Additionally, one can specify the number of videos 
that should be returned on each level by utilizing the `--number` option.
For instance, the following command returns two related videos 
from a given video (specified by it's url) and 
additionally one related video from each sibling:
```sh
$ yt-scraper search url 'https://www.youtube.com/watch?v=0A2R27kCeD4' --depth 1 --number 2 --number 1
```
```
 [STATUS] Result:
  Depth: 0, Rank: 0, ID: 0A2R27kCeD4
             Title: 🤣 Funniest 🐶 Dogs and 😻 Cats - Awesome Funny Home Animal Videos 😇
             Related Videos: ['pc8-8KfIW5c', 'tbyAuT50eu4']
      Depth: 1, Rank: 0, ID: pc8-8KfIW5c
                 Title: 🦁 Funniest Animals 🐼 - Try Not To Laugh 🤣 - Funny Domestic And Wild Animals' Life
                 Related Videos: []
      Depth: 1, Rank: 1, ID: tbyAuT50eu4
                 Title: 😁 Funniest 😻 Cats and 🐶 Dogs - Awesome Funny Pet Animals 😇
                 Related Videos: []
```

For the sake of brevity, you can shorten `--number` to `-n` and `--depth` to
`-d`. 

There are even global commands, too! 
Global options are specified in front of the command and 
alter the behavior of all commands. 
This may not sound very meaningful to you given 
that there only two commands right now and you are right!
But this is likely to change in the future.

For example, to see more output during the program execution, 
specify `--verbose` or `-v` right after `yt-scraper`:

```sh
$ yt-scraper -v search id '0A2R27kCeD4' --max-depth 2
```

There are many more options that you can make use of. 
All of them are described in the Options section. 

Sometimes you may find yourself struggling with all the possible options.
Fortunately, there is the `config` command for all the lazy typer out there.

Setting a particular default option like the output directory to `~/my_data` is as easy
as typing

```sh
$ yt-scraper config set encoding utf-8
```

Forgetful? Just double-check by typing `get` instead of `set`: 

```sh
$ yt-scraper config get encoding
```
```
[STATUS] The value of 'encoding' is set to 'utf-8'.
```

## Configuration

| Search options          | Default    | Description                                                                             |
|-------------------------|------------|------------------------------------------------------------------------------|
| `-n`, `--number`        | 1          | Number of the videos fetched per level (can be specified several times) |
| `-d`, `--max-depth`     | 0          | Number of recursion steps to perform.                                                   |
| `-k`, `--api-key`       | *Required* | The API key that should be used to query the YouTube API v3.                            |
| `-o`, `--output-dir`    | *Optional* | Path to the directory where output files are saved                                      |
| `-f`, `--output-format` | csv        | Specifies the file format of output files.                                              |
| `-N`, `--output-name`   | *Optional* | Specifies the file name or prefix of output files.                                      |
| `-r`, `--region-code`   | de         | Return only videos which are unrestricted in the given region.                          |
| `-l`, `--lang-code`     | de         | Return videos mostly relevant to a specified language.                                  |
| `-s`, `--safe-search`   | none       | Filter sensitive or restricted videos.                                                  |
| `-e`, `--encoding`      | utf-8      | Transform fetched text to another encoding.                                             |
| `-u`, `--unique`        | False      | Do not process seen videos again                                                        |


| Global options        | Default           | Description                                                                       |
|-----------------------|-------------------|-----------------------------------------------------------------------------------|
| `-c`, `--config-path` | *System-specific* | Specifies a configuration file. For details, see [configuration](#Configuration). |
| `-v`, `--verbose`     | False             | Shows more output during program execution.                                       |
| `-V`, `--version`     | *Optional*        | Shows the current program version and exits                                       |

More information can be found by adding the `--help` option to commands or
reading the [YouTube API manual][yt-api-url].

Old-fashioned people, who do not like the `config` command,
can manually configure the program by editing the `config.toml` file.
It is secretly used and altered when using the `config` command.
Entered values are used in all future queries as long as 
they are not overwritten by actual command line options.

For example, to always use the API key `ABCDEFGH` and a search depth of 3, 
where on each level one video less is returned, 
just create following configuration file:

**config.toml**
```toml
api_key = "ABCDEFGH"
number = [ 4, 3, 2, 1 ]
depth = 3
verbose = true
```
An example toml is included: [config.toml][config-url]

Then put this file in your standard configuration folder. Typically this folder can be found at the following location:

- Mac OS X: `~/Library/Application Support/YouTube Scraper`
- Unix: `~/.config/youtube-scraper`
- Windows: `C:\Users\<user>\AppData\Roaming\YouTube Scraper`

If the folder does not exist, you may need to create it first.


## Release History

* 0.2.6 
    - Added [UNLICENSE](license-url) to project
* 0.3.0
    - Uploaded to [PyPI][pypi-url]
* 0.4.0
    - New command *search*
* 0.5.0
    - Option `--depth` renamed to `--max-depth`
    - Video attributes, such as title, description, channel are fetched
    - More consistent option handling
* 0.6.0
    - New export feature: *csv*
    - New command: *config*
    - New API options: *region-code, lang-code and safe-search*

* 0.7.0
    - New `--version` option
    - New `--encoding` option
    - New `--export-name` option
    - New `--unique` option
    - New input method by importing a file or reading from stdin
    - Added prompt when encountering an API error
* 0.8.0
    - New `--format sql` SQLite export
    - New `config where` command
    - Multiple API keys with automatic key switching is now possible
    - New `--include` option
    - New `--exclude` option
    - Renamed `input` argument to `file`
    - Piping of urls is now possible

## Roadmap

Every of these features is going to be a minor patch:

- [X] Add node video data attributes, such as title and description.
- [X] Add possibility to specify more than one API key to switch seamlessly.
- [ ] Add possibility to query more than 50 videos on one level.
- [ ] Add youtube-dl integration for downloading subtitles.
- [ ] Add a testing suite.
- [o] Add export functionality to CSV, SQLlite or Pandas.
- [ ] Add more information about quota to README
 

## Contributing
If you come across any bugs or have a suggestion, 
please don't hesitate to [file an issue][git-new-issue-url].

Contributions in any form are welcomed. 
I will accept pull-requests if they extent **yt-scraper**'s functionality.

To set up the development environment, 
please install [Poetry][poetry-url] and run `poetry install` inside the project.
A test suite will be added soon.

In general, the contribution process is somewhat like this:

1. Fork it (`$ git clone https://github.com/rattletat/yt-scraper`)
2. Create your feature branch (`$ git checkout -b feature/fooBar`)
3. Commit your changes (`$ git commit -am 'Add some fooBar'`)
4. Push to the branch (`$ git push origin feature/fooBar`)
5. Create a new Pull Request


## Author
**Michael Brauweiler**

- Twitter: [@rattletat][me-twitter-url]
- Email: [rattletat@posteo.me](mailto:rattletat@posteo.me)


## License
This plugin is free and unemcumbered software released into the public domain. 

For more information, see the included [UNLICENSE][license-url] file.

<!-- Markdown link & img dfn's -->
[pip-url]: https://pip.pypa.io/en/stable/
[config-url]: data/config.toml
[python-url]: https://www.python.org/
[yt-console-url]: https://console.developers.google.com/
[yt-api-url]: https://developers.google.com/youtube/v3/docs/search/list
[git-new-issue-url]: https://github.com/rattletat/yt-scraper/issues/new
[poetry-url]: https://github.com/python-poetry/poetry
[pypi-url]: https://pypi.org/project/yt-scraper/
[me-github-url]: https://github.com/rattletat
[me-twitter-url]: https://twitter.com/m_brauweiler
[license-url]: UNLICENSE
