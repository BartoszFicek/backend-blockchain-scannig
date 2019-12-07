const mysql = require("mysql");

const pool = mysql.createPool({
  user: "root",
  password: "password",
  database: "try2",
  connectionLimit: 10
});

let trydb = {};

trydb.getAll = () => {
  return new Promise((resolve, reject) => {
    pool.query("SELECT * FROM accounts", (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
};

trydb.getOneById = id => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM accounts WHERE id = ?`, [id], (err, results) => {
      if (err) {
        return reject(err);
      }
      return resolve(results[0]);
    });
  });
};

trydb.addNewAccount = accountNumber => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO accounts (accountNumber) VALUES (?)`,
      [accountNumber],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results[0]);
      }
    );
  });
};

module.exports = trydb;
