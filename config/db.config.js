require('dotenv').config()
const mysql = require('mysql2')

const dbConn = mysql.createConnection(process.env.DATABASE_URL)

// const mysql = require("mysql");

// const dbConn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "tournament",
// });

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database Connected Successfully!!!");
});

module.exports = dbConn;
