exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('cpf', 11).notNullable();
    table.string('phone').notNullable();
    table.boolean('provider').notNullable().defaultTo(false);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('users');
};
