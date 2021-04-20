const getNotes = require('./notes.js')
const chalk = require('chalk')

const msg = getNotes()
const greenMsg = chalk.blue.inverse.bold(msg)
console.log(greenMsg)