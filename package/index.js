/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

const Environment = require('./environment')
const { resolve } = require('path')
const { existsSync } = require('fs')

function createEnvironment() {
  const path = resolve(__dirname, 'environments', `${process.env.NODE_ENV}.js`)
  const constructor = existsSync(path) ? require(path) : Environment
  return new constructor()
}

const environment = createEnvironment()

module.exports = { environment, Environment }
