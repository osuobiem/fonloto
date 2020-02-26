"use strict";

const Model = require("../../core/model");

class User extends Model {
  attr = {
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    age: ""
  };

  constructor() {
    super("users");
  }
}

module.exports = User;
