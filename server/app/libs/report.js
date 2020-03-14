'use strict'

module.exports = {
  success(data) {
    let go = { status: true }
    if (typeof data == 'string') {
      go.message = data
    } else {
      go.data = data
    }
    return go
  },

  failure(message, err = {}) {
    err = Object.entries(err).length < 1 ? message : err
    console.log(err)
    let go = { status: false, message }
    return go
  }
}
