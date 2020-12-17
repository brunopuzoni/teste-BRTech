
exports.up = knex => knex.schema.createTable('tarefas', table => {
  table.increments('id');
  table.text('descricao').notNullable();
});  

exports.down = knex => knex.schema.dropTable('tarefas');