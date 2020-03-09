'use strict'

const ContactModel = require('../models/ContactModel')

let contact = new ContactModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      contact.attr = data
      contact
        .add()
        .then(res => {
          this.get({ id: res.insertId })
            .then(resp => {
              resolve(resp[0])
            })
            .catch(er => {
              console.log(er)
              reject('Opps! Could not create contact')
            })
        })
        .catch(err => {
          console.log(err)
          reject('Opps! Could not create contact')
        })
    })
  },

  async get(criteria = {}) {
    return await contact.get(criteria)
  }
}
