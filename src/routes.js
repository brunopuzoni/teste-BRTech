const express = require("express");
const routes = express.Router();

const db = require("./db")

routes
  .get("/", db.index)
  .post("/create", db.insert)
  .patch("/update/:id", db.update)
  .delete("/delete/:id", db.remove)

module.exports = routes;