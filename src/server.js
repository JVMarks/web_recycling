const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
  express: server,
  noCache: true
})


//Página inicial arroy faction 
//req: requisição e res: resposta 
server.get("/", (req, res) => {
  return res.render("index.html")

})

server.get("/create-point", (req, res) => {
  return res.render("create-point.html")
})

server.get("/search", (req, res) => {
  return res.render("search-results.html")
})

//ctrl ^ p formate documente
//npm install nunjucks
//npm init -y 
//npm install express 
server.listen(3218)