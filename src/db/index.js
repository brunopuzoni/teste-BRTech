const knex = require("knex");
const config = require("../../knexfile.js");

const db = knex(config.development);

module.exports = {

  async index(req, res){
    const rows = await db("tarefas");
    return res.render("index.html", { tarefas: rows });
   
  },
 
  async insert(req, res, next){
    try{
      const { tarefa } = req.body;
      await db("tarefas").insert({ descricao: tarefa });
    
      return res.redirect("/");

    } catch(error) {
        next(error)
    }

  },

  async update(req, res, next){
    try{
      const tarefa = req.body.updtarefa;
      const id = req.body.updid;
  
      await db("tarefas").where({ id: id }).update({ descricao: tarefa });
      return res.redirect("/");

    } catch(error) {
        next(error);
    }
 
  },

  async remove(req, res, next){
    try{
      await db("tarefas").where({ id: req.body.delid }).del();
      return res.redirect("/");

    } catch(error) {
        next(error);
    }
    
  }

}
