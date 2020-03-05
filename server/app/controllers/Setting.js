'use strict'

const SettingModel = require('../models/SettingModel')

let setting = new SettingModel()

module.exports = {
  async create(data) {
    return new Promise((resolve, reject) => {
      setting.attr = data
      setting
        .add()
        .then(res => {
          this.get({ id: res.insertId })
            .then(resp => {
              resolve(resp[0])
            })
            .catch(er => {
              console.log(er)
              reject('Opps! Could not create setting')
            })
        })
        .catch(err => {
          console.log(err)
          reject('Opps! Could not create setting')
        })
    })
  },

  async get(criteria = {}) {
    return await setting.get(criteria)
  },

  async update(data, criteria) {
    return new Promise((resolve, reject) => {
      this.get(criteria).then(res => {
        if (res.length < 1) {
          reject('Setting does not exist!')
        } else {
          setting.attr = data
          setting
            .update(criteria)
            .then(() => {
              this.get(criteria)
                .then(resp => {
                  resolve(resp[0])
                })
                .catch(er => {
                  console.log(er)
                  reject('Opps! Could not update setting')
                })
            })
            .catch(err => {
              console.log(err)
              reject('Opps! Could not update setting')
            })
        }
      })
    })
  },

  async delete(criteria = {}) {
    return await setting.delete(criteria)
  }
}
