const express = require("express");
const cors = require('cors');
const sql = require('mssql');
var mysql      = require('mysql');
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const { nextTick, env } = require("process");
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });


app.use(cors());
// parse application/json
app.use(bodyParser.json());
  
//create database connection
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'my_db'
});
  
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

  
//add new user
app.post('/store-data',(req, res) => {
  let data = {name: req.body.name};
  let sql = "INSERT INTO users SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});