
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('name').notNullable()
    table.specificType('hash_pw', 'char(60)')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
