const db = require('../../core/db')

class Model {
  constructor (table, table_singular) {
    this.table = table
    this.table_singular = table_singular
    this.table_backup = ''
    this.query = ''
    this.values = []
    this.id = 0
    this.child = {}
    this.parent = {}
    this.extend = 'none'
  }

  async run () {
    if (this.query === '') {
      return {
        status: false,
        data: { message: 'Query is empty' }
      }
    } else {
      return await db.build(this.query, this.values)
    }
  }

  /**
   * Get data from database
   * @param {String, Array} field //data field/column to select
   */
  select (field) {
    let options = {
      field: field,
      table: this.extend === 'child' ? this.table_singular : this.table,
      extend: this.extend,
      ex_object:
        this.extend === 'none'
          ? {}
          : this.extend === 'parent'
            ? this.parent
            : this.child
    }
    if (extend === 'child') {
      this.values.push(this.id)
    }
    this.reset().query = db.select(options).query
    return this
  }

  /**
   * Insert data into database
   * @param {Object} options - has the form
   * {
   *   field: single_field_string | [field1, field2, ...],
   *   value: signle_value | [value1, value2, ...]
   * }
   */
  async insert (options) {
    this.setTableName(options)

    if (db.insert(options).status === false) {
      return { status: false, meesage: 'Database Error!' }
    } else {
      this.reset().query = db.insert(options).query
      if (db.checkType(options.value, 'array')) {
        for (let i = 0; i < options.value.length; i++) {
          this.values.push(options.value[i])
        }
      } else {
        this.values.push(options.value)
      }

      return await {
        status: true,
        data: this.run().insertId
      }
    }
  }

  /**
   * Update data in database
   * @param {String} field //data field/column to update
   * @param {*} value //value to be used for update
   */
  update (field, value) {
    let options = {
      field: field,
      value: value
    }
    this.setTableName(options)

    if (db.update(options).status === false) {
      return { status: false, message: 'Database Error!' }
    } else {
      this.reset().query = db.update(options).query
      if (db.checkType(options.value, 'array')) {
        for (let i = 0; i < options.value.length; i++) {
          this.values.push(options.value[i])
        }
      } else {
        this.values.push(options.value)
      }
      return this
    }
  }

  /**
   * Append optional WHERE clause for specificity
   * @param {String} field //data field/column
   * @param {*} value //data value
   * @param {*} cond //condition = (default), >, <, !=, <=, =>
   * Note => Do not use with relationships
   */
  where (field, value, cond = '=') {
    let options = {
      field: field,
      condition: cond,
      value: value,
      extend: this.extend,
      ex_object:
        this.extend === 'none'
          ? {}
          : this.extend === 'parent'
            ? this.parent
            : this.child
    }

    this.query += db.where(options).query
    this.values.push(options.value)

    return this
  }

  /**
   * Append optional AND for specificity
   * @param {String} field //data field/column
   * @param {*} value //data value
   * @param {*} cond //condition = (default), >, <, !=, <=, =>
   */
  and (key, value, cond = '=') {
    let options = {
      key: key,
      condition: cond,
      value: value
    }

    this.query += db.and(options).query
    this.values.push(options.value)

    return this
  }

  /**
   * Append optional OR for specificity
   * @param {String} field //data field/column
   * @param {*} value //data value
   * @param {*} cond //condition; = (default), >, <, !=, <=, =>
   */
  or (key, value, cond = '=') {
    let options = {
      key: key,
      condition: cond,
      value: value
    }

    this.query += db.or(options).query
    this.values.push(options.value)

    return this
  }

  /**
   * Append optional ORDER BY to specify result order
   * @param {String} field //data field/column
   * @param {String} order //result order; ASC (default), DESC
   */
  orderBy (field, order) {
    this.query += db.orderBy({ field: field, order: order })

    return this
  }

  /**
   * Fetch db data after query building
   * @param {number} num //specify number of records tha should be fetched
   */
  async get (num = 0) {
    if (num > 0) {
      this.query += db.limit(num)
    }
    return await this.run()
  }

  /**
   * Fetch all db data from a specified table
   * @param {number} num //specify number of records tha should be fetched
   */
  async all () {
    let options = {
      table: this.hasParent()
        ? this.parent.table
        : this.hasChild()
          ? this.child.name
          : this.table,
      field: '*'
    }
    this.reset().query = db.select(options).query
    return await this.run()
  }

  /**
   * Delete specified record
   * @param {number} id
   */
  delete (id = this.id) {
    let options = {
      table: this.table,
      id: id
    }
    if (db.delete(options).status === false) {
      return { status: false, message: 'Database Error!' }
    } else {
      this.reset().query = db.delete(options).query

      return this
    }
  }

  // Reset query variable, and values array
  reset () {
    this.query = ''
    this.values = []
    return this
  }

  // Get total number of fetched records
  async count () {
    return await this.run().length
  }

  // Check if a specific database record exists
  async exists () {
    const results = await this.count()
    return !(results < 1)
  }

  // Append table name to options object
  setTableName (options) {
    return (options.table = this.table)
  }

  /**
   * Fetch single record using its id
   * @param {number} id
   */
  async find (id) {
    let ins = this
    this.select('*') + this.where('id', id)
    const results = await this.run()
    if (results.length > 0) {
      ins.id = id
    }
    return results
  }

  /**
   * Create a many-to-one relationship
   * between this table and a perent table
   * @param {Object} parent //parent object
   */
  belongsTo (parent) {
    this.parent = new parent()
    this.extend = 'parent'
    return this
  }

  /**
   * Create a one-to-many relationship
   * between this table and a child table
   * @param {Object} child //child object
   * Note => You must use find before using this function
   */
  hasMany (child) {
    this.child = new child()
    this.extend = 'child'
    return this
  }

  /**
   * Create a many-to-one relationship
   * between this table and a parent table
   * @param {Object} parent //parent object
   * Note => You must use find before using this function
   */
  hasParent (parent) {
    this.parent = new parent()
    this.extend = 'parent'
    return this
  }

  hasChild () {
    return !(this.child === {})
  }
}

module.exports = Model
