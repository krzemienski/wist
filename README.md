# Wist

<p align="center">
    <img width="200px" height="200px" src="artwork/wist-logo.svg"/>
</p>

Wist is a linter for identifying and reporting errors in Brightscript code. It helps you identify errors before you upload code to your Roku.

**For full documentation, please see our user and developer guides [here](https://willowtreeapps.github.io/wist/)**

## How does it compare to other tools?

Wist has one of the most accurate and complete implementations of the Brightscript grammer available right now. 
It focuses reporting not just syntax violations, but reporting patterns that are likely to result in errors.


## Requirements

* NodeJS

* (Optional) JDK8


## Clients

The easiest and best way to use Wist, is through our editor clients.

* [Atom IDE Brightscript](https://github.com/willowtreeapps/atom-ide-brightscript)
* VSCode coming soon

You can install them through their respective package managers and work out of the box with a `.wistrc.json` in your root directory.

## Standalone installation

We recommend taking this approach if you if you want to include Wist as part of your project's build pipeline. Wist is available via as an NPM package and can be installed like so:


```
$ npm install -g @willowtreeapps/wist
```

It can be invoked directly using the `wist` command

```
$ wist yourfile.brs
```

Wist can also be installed locally to the project

```
$ npm install @willowtreeapps/wist --save-dev
```

After that, you can run Wist in your project's root directory like this:

```
$ ./node_modules/.bin/wist yourfile.brs
```


## Usage

```
wist [options] file.brs [file.brs] [dir]

Basic configuration:
  -i, --init           Initialize Wist
  -c, --config String  Use specified configuration file
  -f, --format String  Output format - either: compact, json, stylish, unix, or visualstudio - default: stylish
  -v, --verbose        Verbose logging
  -h, --help           Show help
```

To get started linting your Brightscript project, you should then setup a wist configuration file:

```
$ wist --init
```

This will generate a `.wistrc.json` file in your directory. In it, you'll see some rules configured like this:

```json
{
    "rules": {
        "no-stop": ["error"],
        "no-print": ["warn"]
    }
}
```

These configures the sort of errors that the [rules engine](https://willowtreeapps.github.io/wist/rules-engine) reports back. There are several other [rules](https://willowtreeapps.github.io/wist/rules) that can be configured. See the documentation for the full list.

Once your `.wistrc.json` has been configured to your liking. Invoke wist on your Brightscript file.

```
$ wist yourfile.brs
```

## Wist format

Wist format is a code formatter built into Wist.

```
Usage: wist-fmt [options] [file.brs]

  -i, --indent Int  Number of tokens to indent
  -h, --help        Show help
  -v, --version     Show version information
```

You can invoke the formatter in the terminal using the `wist-fmt` command.

```
wist-fmt yourfile.brs
```

You can specify the number of spaces used to indent your code using the `-i` flag.

```
wist-fmt -i 2 yourfile.brs
```

## Contributing to Wist

Contributions are welcome. Please see the [Contributing guidelines](CONTRIBUTING.md).

Wist has adopted a [Code of Conduct](CODE_OF_CONDUCT.md) defined by the [Contributor Covenant](http://contributor-covenant.org). Please see our [Code of Conduct](/CODE_OF_CONDUCT.md) as well as our [Contributing Guidelines ](/CONTRIBUTING.md) for more information.
