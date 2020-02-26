"use strict";

const Database = require("../db");

class Model extends Database {
  attr = {};

  constructor(table) {
    super(table);
  }

  /**
   * Get data from the database
   *
   * @param {object} query
   */
  async get(query = {}) {
    return await this.read(query);
  }

  /**
   * Create new database record
   */
  async add() {
    return await this.create(this.attr);
  }

  /**
   * Update data in the database
   *
   * @param {object} query
   */
  async update(query = {}) {
    return await this.modify(this.attr, query);
  }

  /**
   * Remove data from the database
   *
   * @param {object} query
   */
  async delete(query = {}) {
    return await this.remove(query);
  }
}

module.exports = Model;
