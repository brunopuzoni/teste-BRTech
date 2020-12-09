const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./todo.db');

db.serialize(function () {
    const banco = `
        CREATE TABLE IF NOT EXISTS tarefas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            descricao TEXT,
            status INTEGER
        );
    `;

    db.run(banco);
    db.run('INSERT INTO tarefas(descricao, status) VALUES(?,?)',['Tarefa 1',1]);
    db.run('INSERT INTO tarefas(descricao, status) VALUES(?,?)',['Tarefa 2',0]);
    db.run('INSERT INTO tarefas(descricao, status) VALUES(?,?)',['Tarefa 3',1]);
    db.run('INSERT INTO tarefas(descricao, status) VALUES(?,?)',['Tarefa 4',0]);
});

module.exports = db;