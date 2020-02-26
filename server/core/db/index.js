const config = require("../config/database");

const DB = require(`../${config.driver}`);

class Database extends DB {
  constructor(table) {
    super(table);
  }
}

module.exports = Database;
