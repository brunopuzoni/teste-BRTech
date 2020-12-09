const express = require('express');
const server = express();
const db = require("./db");

server.set("view engine", "ejs");
server.use(express.static("public"));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());



server.get('/teste/:id', (req, res) => {
    let sql = 'SELECT * FROM tarefas WHERE id = ?';
    let params = [req.params.id];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ "erro": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });

});

server.get('/teste', (req, res) => {
    let sql = 'SELECT * FROM tarefas';
    let params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({ "erro": err.message });
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });

});

server.get('/', function (req, res) {
    res.render('index');
});

server.post('/', function (req, res) {

    let erro = [];
    if (!req.body.tarefa) {
        erro.push("Nenhuma tarefa descrita");
    }
    if (erro.length) {
        res.status(400).json({ "erro": erro.values });
        return;
    }

    let data = {
        descricao: req.body.tarefa,
        status: 0
    }

    let sql = 'INSERT INTO tarefas(descricao, status) VALUES(?,?)';
    let params = [data.descricao, data.status];

    db.run(sql, params, (err) => {
        if (err) {
            res.status(400).json({ "erro": err.message });
            return;
        }
        return res.redirect("/");

    });

});



server.use(function (req, res) {
    res.status(404);
});

server.listen(3001);