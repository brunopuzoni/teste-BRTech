const express = require("express");
const nunjucks = require("nunjucks");
const methodOverride = require("method-override");
const db = require("./db");

const port = 3001;
const server = express();

//Custom Getter para o methodOverride
//Possibilita o funcionamento das rotas
//PATCH e DELETE
const getter = (req, res) => {
  if (req.body && typeof req.body === "object" && "method" in req.body) {
    const { method } = req.body;
    delete req.body.method;
    return method;
  }
};

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(methodOverride(getter));
nunjucks.configure("views", {
  express: server,
  noCache: true,
});

server.get("/", (req, res) => {
  const sql = "SELECT * FROM tarefas";

  db.all(sql, (err, rows) => {
    if (err) {
      res.status(400).json({ erro: err.message });
      return;
    }
    return res.render("index.html", { tarefas: rows });
  });
});

server.post("/create", (req, res) => {
  const sql = "INSERT INTO tarefas(descricao) VALUES(?)";
  const params = req.body.tarefa;

  db.run(sql, params, (err) => {
    if (err) {
      res.status(400).json({ erro: err.message });
      return;
    }
    return res.redirect("/");
  });
});

server.patch("/update/:id", (req, res) => {
  const data = {
    descricao: req.body.updtarefa,
    id: req.body.updid,
  };

  const sql = "UPDATE tarefas SET descricao = ? WHERE id = ?";
  const params = [data.descricao, data.id];

  db.run(sql, params, (err) => {
    if (err) {
      return res.status(400).json({ erro: err.message });
    }
    return res.redirect("/");
  });
});

server.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM tarefas WHERE id = ?";

  db.run(sql, req.body.delid, (err) => {
    if (err) {
      return res.status(400).json({ erro: err.message });
    }
    return res.redirect("/");
  });
});

server.get("*", (req, res) => {
  res.status(404).send("Error 404: File not found");
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
