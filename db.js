const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./todo.db')

db.serialize(function() {
    // criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS tarefas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            descricao TEXT,
            status INTEGER
        );
    `)
})

module.exports = db