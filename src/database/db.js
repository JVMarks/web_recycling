const sqlite3 = require("sqlite3").verbose()

//para incerir dados na tabela node src/database/db.js
//inicaiar o objeto no banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

db.serialize(() => {
  //criar uma tabela 
  db.run(`
      CREATE TABLE IF NOT EXISTS places (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       image TEXT,
       name TEXT,
       address TEXT,
       address2 TEXT,
       state TEXT,
       city TEXT,
       items TEXT
      );
   `)
  //Inserir dados na tabela 
  //const query = `
    //INSERT INTO places (
     // image,
     // name,
     // address,
     // address2,
     // state,
      //city,
      //items
   // ) VALUES (?,?,?,?,?,?,?);
 // `
  //const values = [
   // "",
   // "",
    //"",
   // "",
   // "",
  //  "",
   // ""
 // ]

 // function afterInsertData(err) {
  //  if (err) {
    //  return console.log(err)
   // }

  //  console.log("FALA FIOTE")
   // console.log(this)
  //}

  //db.run(query, values, afterInsertData)

  //consultar os dados de tabela
  // db.all(`SELECT * FROM places`, function(err, rows){
  //  if (err) {
   //   return console.log(err)
   // }
    
   // console.log("consulte os dados")
   // console.log(rows)
   //})

  //deletar um dado da tabela
 // db.run(`DELETE FROM places`)
 // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err){
  //  if(err){
   //  return console.log(err)
    //}

   // console.log("DELETADO")

  //})

})