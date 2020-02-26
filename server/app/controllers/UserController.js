"use strict";

const UserModel = require("../models/User");

let user = new UserModel();

module.exports = {
  async get() {
    return await user.get({
      id: {
        $lt: 10
      },
      $ext: {
        $ord: {
          firstname: "ASC"
        },
        $lim: 4
      }
    });
  },

  async create(data) {
    user.attr = data;

    return await user.add();
  },

  async update(data, id) {
    user.attr = data;

    return await user.update({
      id
    });
  },

  async delete(id) {
    return await user.delete({
      id
    });
  }
};
