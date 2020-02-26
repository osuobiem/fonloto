"use strict";

const CORE = require("./core");

let core = new CORE();

class MySQL {
  query = "";
  table;

  // Reserved keywords to be used in query objects
  reserved = {
    $and: "AND",
    $or: "OR",
    $eq: "=",
    $neq: "!=",
    $gt: ">",
    $lt: "<",
    $gte: ">=",
    $lte: "<=",
    $lim: "LIMIT",
    $ord: "ORDER BY"
  };

  constructor(table) {
    this.table = table;

    core.connect();
  }

  /**
   * Execute composed sql query
   */
  async exec() {
    return new Promise((resolve, reject) => {
      core.db.query(this.query, {}, (err, results, fields) => {
        if (err) {
          reject("An error occured. Could not continue!");
          console.log(err);
        }

        resolve({
          results,
          fields
        });
      });
    });
  }

  /**
   * Compose and handle data retrieval related queries
   */
  async read(query_object = {}) {
    if (this.count(query_object) < 1) {
      this.query = `SELECT * FROM ${this.table}`;
    } else {
      this.query = "SELECT ";

      if (query_object.fields) {
        let c = 1;
        let fields = query_object.fields;

        [...fields].forEach(el => {
          if (c == fields.length) {
            this.query += el;
          } else {
            this.query += el + ", ";
          }
          c++;
        });

        this.query += ` FROM ${this.table}`;
        delete query_object.fields;
      } else {
        this.query += `* FROM ${this.table}`;
      }

      this.compose(query_object);
    }

    return await this.query;
  }

  /**
   * Compose and handle data creation related queries
   *
   * @param {object} data
   */
  async create(data) {
    let c = 1;

    this.query = `INSERT INTO ${this.table} `;
    let fields = "";
    let values = "";

    Object.entries(data).forEach(([key, value]) => {
      if (c == this.count(data)) {
        fields += `${key}) `;
        values += this.getType(value) == "number" ? `${value})` : `'${value}')`;
      } else if (c == 1) {
        fields += `(${key}, `;
        values +=
          this.getType(value) == "number"
            ? `VALUES (${value}, `
            : `VALUES ('${value}', `;
      } else {
        fields += `${key}, `;
        values +=
          this.getType(value) == "number" ? `${value}, ` : `'${value}', `;
      }

      c++;
    });

    this.query += fields + values;

    return await this.exec();
  }

  /**
   * Compose and handle data update related queries
   *
   * @param {object} data
   * @param {object} query
   */
  async modify(data, query = {}) {
    let c = 1;

    this.query = `UPDATE ${this.table} SET `;

    Object.entries(data).forEach(([key, value]) => {
      if (c == this.count(data)) {
        value = this.getType(value) == "number" ? `${value}` : `'${value}'`;
        this.query += `${key} = ${value}`;
      } else {
        value = this.getType(value) == "number" ? `${value}` : `'${value}'`;
        this.query += `${key} = ${value}, `;
      }

      c++;
    });

    if (this.count(query) > 0) {
      this.query += " WHERE";
      this.traverse(query);
    }

    return await this.exec();
  }

  /**
   * Compose and handle data removal related queries
   *
   * @param {object} query
   */
  async remove(query = {}) {
    this.query = `DELETE FROM ${this.table}`;

    this.count(query) > 0 ? this.traverse(query) : "";

    return await this.exec();
  }

  /**
   * Compose sql query from query object
   *
   * @param {obj} obj
   */
  compose(obj) {
    if (obj.$ext && this.count(obj) > 1) {
      this.query += " WHERE";
    }

    this.traverse(obj);
  }

  /**
   * Traverse through query object so as to compose query
   * @param {object} obj
   */
  traverse(obj) {
    let ext = {};

    if (obj.$ext) {
      ext = obj.$ext;

      delete obj.$ext;
    }

    if (this.count(obj) > 0) {
      Object.entries(obj).forEach(([key, value]) => {
        if (this.reserved[key]) {
          if (this.getType(value) == "object") {
            this.query += ` ${this.reserved[key]}`;
            this.traverse(value);
          } else {
            this.query += ` ${this.reserved[key]} ${value}`;
          }
        } else {
          if (this.getType(value) == "object") {
            this.query += ` ${key}`;
            this.traverse(value);
          } else {
            value = this.getType(value) == "number" ? `${value}` : `'${value}'`;
            this.query += ` ${key} = ${value}`;
          }
        }
      });
    }

    if (ext) {
      this.traverseExt(ext);
    }
  }

  /**
   * Traverse external query object. Ex; LIMIT, ORDER BY, etc
   *
   * @param {object} obj
   */
  traverseExt(obj) {
    Object.entries(obj).forEach(([key, value]) => {
      if (this.reserved[key]) {
        if (this.getType(value) == "object") {
          this.query += ` ${this.reserved[key]}`;
          this.traverseExt(value);
        } else {
          this.query += ` ${this.reserved[key]} ${value}`;
        }
      } else {
        if (this.getType(value) == "object") {
          this.query += ` ${key}`;
          this.traverseExt(value);
        } else {
          this.query += ` ${key} ${value}`;
        }
      }
    });
  }

  /**
   * Get the type of a variable
   * @param {mixed} element
   * @returns {string}
   */
  getType(element) {
    let r = "";

    if (typeof element == "object" && Array.isArray(element)) {
      r = "array";
    } else {
      r = typeof element;
    }

    return r;
  }

  /**
   * Count and return the number of elements in an object
   * @param {object} object
   */
  count(object) {
    return Object.keys(object).length;
  }
}

module.exports = MySQL;
