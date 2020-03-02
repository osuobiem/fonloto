'use strict'

module.exports = {
  errors: {},
  status: true,
  exempt: [],

  empty(data) {
    if (Object.entries(data).length > 0) {
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
    } else {
      this.status = false
      this.errors.empty = 'No data supplied!'
    }
  },

  remove(data) {
    if (this.exempt) {
      ;[...this.exempt].forEach(el => {
        data.hasOwnProperty(el) && data[el].length < 1 ? delete data[el] : null
      })
    }

    return data
  },

  report() {
    let err = this.errors
    this.errors = {}
    this.status = true
    this.exempt = []

    return err
  }
}
