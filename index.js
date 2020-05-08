const signale = require('signale')
const path = require('path')
const fs = require('fs')

const getDate = () => {
  const date = new Date()
  return `${date.getFullYear()}-${date.getMonth() +
    1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}:${date.getMilliseconds()}`
}

class Logger {
  /**
   * Simple Logger
   * @param {boolean} debug true for turn on debug method
   * @param {string} logPath Log save path
   */
  constructor (debug = false, logPath) {
    if (typeof logPath === 'undefined') {
      this.dirPath = path.resolve(path.dirname(require.main.filename), './log')
      if (!fs.existsSync(this.dirPath)) {
        fs.mkdirSync(this.dirPath)
      }
      this.filePath = path.resolve(this.dirPath, `./${getDate()}.log`)
    } else {
      this.filePath = logPath
    }

    if (!fs.existsSync(this.filePath)) {
      fs.writeFileSync(this.filePath, '')
    }
    this.debug = debug
  }

  /**
   * Just log something
   * @param  {...string} contents Contents that you want to log
   */
  log (...contents) {
    signale.scope(getDate(), '[LOG]').log(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[LOG] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Tell some infomations
   * @param  {...string} contents Infomations that you want to tell
   */
  info (...contents) {
    signale.scope(getDate()).info(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[INFO] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Use when something is completed
   * @param  {...string} contents Contents that you want to add
   */
  complete (...contents) {
    signale.scope(getDate()).complete(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[COMPLETE] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Alert error!
   * @param {Error} error Error
   */
  error (error) {
    signale.scope(getDate()).error(error)
    fs.appendFileSync(this.filePath, `[ERROR] ${getDate()} ${error}\n`, {
      encoding: 'utf8'
    })
  }

  /**
   * Use when you want to log something only in debug(debug needs to be turned on)
   * @param  {...string} contents Contents that you want to log
   */
  debug (...contents) {
    if (this.debug) {
      signale.scope(getDate()).debug(`${contents.join(' ')}`)
      fs.appendFileSync(
        this.filePath,
        `[DEBUG] ${getDate()} ${contents.join(' ')}\n`,
        { encoding: 'utf8' }
      )
    }
  }

  /**
   * Program Fatal
   * @param {*} error Error that occured fatal
   */
  fatal (error) {
    signale.scope(getDate()).fatal(error)
    fs.appendFileSync(this.filePath, `[FATAL] ${getDate()} ${error}\n`, {
      encoding: 'utf8'
    })
  }

  /**
   * Just a note
   * @param  {...string} contents something that you want to note
   */
  note (...contents) {
    signale.scope(getDate()).note(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[NOTE] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Use when something is pending
   * @param  {...string} contents Notice that something is pending
   */
  pending (...contents) {
    signale.scope(getDate()).pending(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[PENDING] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Say that something is starting
   * @param  {...string} contents contents that you want to say
   */
  start (...contents) {
    signale.scope(getDate()).start(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[START] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Use when something is successful
   * @param  {...string} contents Something
   */
  success (...contents) {
    signale.scope(getDate()).success(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[SUCCESS] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * When yoiu need to wait something, use this
   * @param  {...string} contents Contents that you want to say
   */
  wait (...contents) {
    signale.scope(getDate()).wait(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[WAIT] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Warning something
   * @param  {...string} contents something that you warn
   */
  warn (...contents) {
    signale.scope(getDate()).warn(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[WARN] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }

  /**
   * Watch what someone's doing
   * @param  {...string} contents something that you want to say
   */
  watch (...contents) {
    signale.scope(getDate()).watch(`${contents.join(' ')}`)
    fs.appendFileSync(
      this.filePath,
      `[WATCH] ${getDate()} ${contents.join(' ')}\n`,
      { encoding: 'utf8' }
    )
  }
}

module.exports = Logger
