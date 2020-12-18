const express = require("express");
const nunjucks = require("nunjucks");
const methodOverride = require("method-override");
const routes = require("./routes");

const port = 3002;
const server = express();

let getter = (req, res) => {
  if (req.body && typeof req.body === "object" && "method" in req.body) {
    const method = req.body.method;
    delete req.body.method;
    return method;
  }
}

server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(methodOverride(getter));
nunjucks.configure("views", {
  express: server,
  noCache: true
});

server.use(routes);

server.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.json({ error: error.message })
});

server.listen(port, () => console.log(`Servidor rodando na porta ${port}`));