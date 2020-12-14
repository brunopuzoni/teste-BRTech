const express = require('express');
const nunjucks = require('nunjucks');
const db = require('./db');

const server = express();

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
nunjucks.configure('views', {
    express: server,
    noCache: true
})



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

server.get('/', (req, res) => {
    let sql = 'SELECT * FROM tarefas';

    db.all(sql,(err,rows) =>{
        if (err){
            res.status(400).json({"erro": err.message});
            return;
        }
        return res.render('index.html', {tarefas: rows});
    })
});

server.post('/', (req, res) => {

    let erro = [];
    if (!req.body.tarefa) {
        erro.push("Nenhuma tarefa descrita");
    }
    if (erro.length) {
        res.status(400).json({ "erro": erro.values });
        console.log(erro);
        return;
    }

    let sql = 'INSERT INTO tarefas(descricao) VALUES(?)';
    let params = req.body.tarefa;

    db.run(sql, params, (err) => {
        if (err) {
            res.status(400).json({ "erro": err.message });
            return;
        }
        return res.redirect("/");

    });

});

server.patch('/update/:id', (req, res) => {

    let erro = [];
    if (!req.body.updtarefa) {
        erro.push("Nenhuma tarefa descrita");
    }
    if (erro.length) {
        res.status(400).json({ "erro": erro.values });
        console.log(erro);
        return;
    }

    let data = { 
        descricao: req.body.updtarefa,
        id: req.body.updid
    };

    let sql = 'UPDATE tarefas SET descricao = ? WHERE id = ?';
    let params = [data.descricao, data.id];

    db.run(sql, params, (err) =>{
        if (err) {
            return res.status(400).json({ "erro": err.message });
        }
        return res.redirect("/");
    })
})



server.get('*', (req, res) => {
    res.status(404).send('Error 404: File not found')
});

server.listen(3001, () => console.log("Servidor rodando na porta 3001"));