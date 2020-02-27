'use strict'

class Validate {
  errors = {}

  required(key, value) {
    this.errors[key] = !this.errors[key] ? [] : this.errors[key]
    if (value.length < 1) {
      this.errors[key].push(`${key} is required`)
    }
  }
}
