exports.up = (knex) => {
  return knex.schema.createTable('ongs', (table) => {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('cnpj', 11).notNullable();
    table.string('adress').notNullable();
    table.string('phone').notNullable();
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('ongs');
};
