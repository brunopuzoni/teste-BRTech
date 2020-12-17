
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tarefas").del()
    .then(function () {
      // Inserts seed entries
      return knex("tarefas").insert([
        { descricao: "Tarefa 1" },
        { descricao: "Tarefa 2" },
        { descricao: "Tarefa 3" }
      ]);
    });
};
