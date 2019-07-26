# simple-logger

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

> Just a simple logger(console, file)

TODO: Fill out this long description.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Install

```
npm install git+https://github.com/Helloyunho/simple-logger.git
```

## Usage

```js
const SimpleLogger = require('simple-logger')
const logger = new SimpleLogger()

logger.log('Something')

```

## API

### new Logger(debug: boolean, path: string)

The constructor.

* params
  * `debug`: `true` for turn on debug method
  * `path`: Log save path

#### log(contents: ...string)

Just log something

* param
  * `contents`: contents that you want to log

#### info(contents: ...string)

Tell some infomations

* param
  * `contents`: Infomations that you want to tell

#### complete(contents: ...string)

Use when something is completed

* param
  * `contents`: Contents that you want to add

#### error(error: Error)

Alert error!

* param
  * `error`: Error

#### debug(contents: ...string)

Use when you want to log something only in debug(debug needs to be turned on)

* param
  * `contents`: Contents that you want to log

#### fatal(error: Error)

Program fatal

* param
  * `error`: Error that occured fatal

#### note(contents: ...string)

Just a note

* param
  * `contents`: Something that you want to note

#### pending(contents: ...string)

Use when something is pending

* param
  * `contents`: Notice that something is pending

#### start(contents: ...string)

Say that something is starting

* param
  * `contents`: contents that you want to say

#### success(contents: ...string)

Use when something is successful

* param
  * `contents`: Something

#### wait(contents: ...string)

When yoiu need to wait something, use this

* param
  * `contents`: Contents that you want to say

#### warn(contents: ...string)

Warn something

* param
  * `contents`: something that you warn

#### watch(contents: ...string)

Watch what someone's doing

* param
  * `contents`: something that you want to say

~~I'm tired at writing docs.~~

## Maintainers

[@Helloyunho](https://github.com/Helloyunho)

## Contributing

PRs accepted.

Small note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

MIT © 2019 Helloyunho
