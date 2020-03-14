'use strict'

const FAQModel = require('../models/FAQModel')

let faq = new FAQModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      faq.attr = data
      faq
        .add()
        .then(res => {
          this.get({ id: res.insertId })
            .then(resp => {
              resolve(resp[0])
            })
            .catch(er => {
              console.log(er)
              reject('Opps! Could not create faq')
            })
        })
        .catch(err => {
          console.log(err)
          reject('Opps! Could not create faq')
        })
    })
  },

  async get(criteria = {}) {
    return await faq.get(criteria)
  },

  async update(data, criteria) {
    return new Promise((resolve, reject) => {
      this.get(criteria).then(res => {
        if (res.length < 1) {
          reject('Category does not exist!')
        } else {
          faq.attr = data
          faq
            .update(criteria)
            .then(() => {
              this.get(criteria)
                .then(resp => {
                  resolve(resp[0])
                })
                .catch(er => {
                  console.log(er)
                  reject('Opps! Could not update faq')
                })
            })
            .catch(err => {
              console.log(err)
              reject('Opps! Could not update faq')
            })
        }
      })
    })
  },

  async delete(criteria = {}) {
    return await faq.delete(criteria)
  }
}
