#!/usr/bin/env node
const Haikunator = require('haikunator')

const argv = require('yargs')
  .usage('$0 [options]', 'Generate Heroku-like random names')
  .example('$0', 'cold-wildflower')
  .alias('c', 'tokenChars')
  .describe('c', 'Custom characters to use for token')
  .alias('d', 'delimiter')
  .default('d', '-')
  .describe('d', 'Delimiter')
  .alias('h', 'tokenHex')
  .default('h', false)
  .describe('h', 'Use hex instead of numbers for tokens')
  .alias('l', 'tokenLength')
  .default('l', 0)
  .describe('l', 'Length of the token to append')
  .help()
  .argv

const { delimiter, tokenChars, tokenHex, tokenLength } = argv

const haikunator = new Haikunator({
  defaults: { delimiter, tokenChars, tokenHex, tokenLength }
})

process.stdout.write(`${haikunator.haikunate()}\n`)
