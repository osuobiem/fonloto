'use strict'

// Require useful modules
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
  path: path.join(__dirname, '../../../.env')
})

// JWT secret key
const key = process.env.JWT_KEY

module.exports = {
  /**
   * Issue a token
   *
   * @param {object} payload
   */
  issue(payload) {
    return jwt.sign(payload, key, {
      expiresIn: '1 day'
    })
  },

  /**
   * Verify supplied token
   *
   * @param {string} token
   * @param {function} callback
   */
  verify(token, callback) {
    return jwt.verify(token, key, {}, callback)
  }
}
