'use strict'

module.exports = {
  success(res, data) {
    let go = { status: true }
    if (typeof data == 'string') {
      go.message = data
    } else {
      go.data = data
    }
    res.send(go)
  },

  failure(res, message, err = {}) {
    err = Object.entries(err).length < 1 ? message : err
    console.log(err)
    let go = { status: false, message }
    res.send(go)
  }
}
