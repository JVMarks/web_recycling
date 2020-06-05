const express = require("express")
const server = express()

const db = require("./database/db.js")

//configurar pasta publica
server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

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

  //req.query serve para editar nossa url 
  //console.log(req.query)
  //req.query

  return res.render("create-point.html")
})

server.post("/savepoint", (req, res) => {

  const query = `
      INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      ) VALUES (?,?,?,?,?,?,?);
   `
  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.item
  ]

  function afterInsertData(err) {
    if (err) {
      return console.log(err)
    }

    console.log("cadastrado com sucesso")
    console.log(this)

    return res.render("create-point.html", {saved: true})
  }
  db.run(query, values, afterInsertData)

})

server.get("/search", (req, res) => {

  const search = req.query.search
  if(search == ""){
    return res.render("search-results.html", {total: 0 })
  }

  db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
    if (err) {
      return console.log(err)
    }

    const total = rows.length

    console.log("consulte os dados")
    console.log(rows)
    //mostrar a pagita HTML com os dados do BD
    return res.render("search-results.html", { places: rows, total: total })
  })

})

//ctrl ^ p formate documente
//npm install nunjucks
//npm init -y 
//npm install express 
//npm install sqlite3
server.listen(3218)