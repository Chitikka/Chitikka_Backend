const mysql = require("mysql2");

const connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "Potato123@",
  database: "chittikka",
});

module.exports = connectionPool;
