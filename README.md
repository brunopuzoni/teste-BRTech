# Lista de Tarefas + CRUD </h1>

O projeto consiste em uma lista de tarefas (to-do list), abordando todas as operações de um CRUD (Create, Read, Update, Delete) através de uma API REST, podendo inserir novas tarefas, atualizar as já existentes e excluir as que desejar. <br>
O aplicativo foi construído utilizando o framework Bootstrap (v4.5.3), além de outros pacotes e tecnologias que ainda serão abordados. 

## :speech_balloon: Tecnologias 
 
 * HTML 5
 * CSS 3
 * Javascript / ES6+
 * jQuery (utilizado no modal Bootstrap)
 * SQLite
 
## :wrench: Dependências

* [NodeJS](https://nodejs.org/)
* [ExpressJS](https://expressjs.com/)
* [SQLite3: ](https://www.npmjs.com/package/sqlite3) Pacote para conexão com o banco de dados escolhido 
* [Nunjucks: ](https://mozilla.github.io/nunjucks/) Template engine escolhido, utilizado para manipular os dados no front-end.
* [Nodemon: ](https://nodemon.io/) Dependência de desenvolvimento, monitora mudanças no arquivo e reinicia automaticamente o servidor.
* [Method-Override: ](https://www.npmjs.com/package/method-override) Adição do Express, utilizado para interceptar os métodos enviados pelos forms.
* [Knex: ](http://knexjs.org/) Utilizado na branch knex, é um Query Builder que auxilia a manipulação do banco de dados.

## :computer: Deploy

### Requerimentos 

* [Git](https://git-scm.com/)
* NodeJS (v12.18.4 ou mais recente)
* [NPM](https://www.npmjs.com/) / [Yarn](https://yarnpkg.com/)
* Acesso à internet

### Deploy

#### Via terminal: 

1. Clone o repositório com `git clone https://github.com/brunopuzoni/teste-BRTech.git`
2. Acesse a pasta com `cd teste-BRTech/`
3. Instale as dependências com `npm install`

### Opcional: Branch Knex

Neste repositório está incluído a branch `knex`, que contém uma versão diferente do mesmo projeto, porém usando o pacote knex como query builder, além de uma organização de arquivos um pouco diferente. Caso queira acessá-la:

#### Via terminal:

1. Troque de branch com `git switch knex`
2. Instale as dependências novamente com `npm install`

## :heavy_check_mark: Aplicação

Para rodar a aplicação, execute o comando `npm start` pelo terminal <br>
Por padrão, a branch `main` é acessada via navegador através do `http://localhost:3001` <br>
A branch `knex` é acessada através do `http://localhost:3002`

## :exclamation: Considerações Finais

Este projeto foi desenvolvido como teste para uma vaga de estágio na empresa BR Media Group. Gostaria de agradecer pela oportunidade e pela grande quantidade de conhecimento que eu adquiri para a realização do projeto. Espero ter atendido as expectativas e me coloco disponível para qualquer esclarecimento ou avaliação futura.
