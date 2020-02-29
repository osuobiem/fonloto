'use strict'

module.exports = {
  errors: {},
  status: true,
  exempt: [],

  empty(data) {
    data = this.remove(data)

    for (let el in data) {
      if (data[el].length < 1) {
        this.status = false
        this.errors[el] = this.errors[el] ? this.errors[el] : []
        this.errors[el].push(
          `${el.slice(0, 1).toUpperCase()}${el.slice(1)} field is empty!`
        )
      }
    }
  },

  remove(data) {
    if (this.exempt) {
      ;[...this.exempt].forEach(el => {
        delete data[el]
      })
    }

    return data
  },

  report() {
    let err = this.errors
    this.errors = {}
    this.status = true

    return err
  }
}
