require('dotenv').config()
const mysql = require('mysql2')
// const mysql = require("mysql");

let dbConn;
if (process.env.DATABASE_URL) {
  dbConn = mysql.createConnection(process.env.DATABASE_URL)
} else {
  dbConn = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
}

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database Connected Successfully!!!");
});

module.exports = dbConn;
