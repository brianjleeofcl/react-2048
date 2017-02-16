
exports.up = function(knex) {
  return knex.schema.createTable('scores', (table) => {
    table.increments()
    table.integer('Score').notNullable().defaultTo(0)
    table.integer('user_id').notNullable()
      .references('id').inTable('users').index()
    table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('scores')
};
