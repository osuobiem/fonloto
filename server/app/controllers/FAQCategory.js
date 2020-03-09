'use strict'

const FAQCatModel = require('../models/FAQCatModel')

let category = new FAQCatModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      category.attr = data
      category
        .add()
        .then(res => {
          this.get({ id: res.insertId })
            .then(resp => {
              resolve(resp[0])
            })
            .catch(er => {
              console.log(er)
              reject('Opps! Could not create category')
            })
        })
        .catch(err => {
          console.log(err)
          reject('Opps! Could not create category')
        })
    })
  },

  async get(criteria = {}) {
    return await category.get(criteria)
  },

  async update(data, criteria) {
    return new Promise((resolve, reject) => {
      this.get(criteria).then(res => {
        if (res.length < 1) {
          reject('Category does not exist!')
        } else {
          category.attr = data
          category
            .update(criteria)
            .then(() => {
              this.get(criteria)
                .then(resp => {
                  resolve(resp[0])
                })
                .catch(er => {
                  console.log(er)
                  reject('Opps! Could not update category')
                })
            })
            .catch(err => {
              console.log(err)
              reject('Opps! Could not update category')
            })
        }
      })
    })
  },

  async delete(criteria = {}) {
    return await category.delete(criteria)
  }
}
