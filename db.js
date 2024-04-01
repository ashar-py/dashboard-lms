// // db.js

// const sql = require('mssql');

// const config = {
//   user: 'your_username',
//   password: 'your_password',
//   server: 'your_server_name', // You can use 'localhost' if running locally
//   database: 'your_database_name',
// };

// const poolPromise = new sql.ConnectionPool(config)
//   .connect()
//   .then((pool) => {
//     console.log('Connected to SQL Server');
//     return pool;
//   })
//   .catch((err) => console.log('Database Connection Failed! Bad Config: ', err));

// module.exports = {
//   sql,
//   poolPromise,
// };



// db.js
const users = [];

module.exports = {
  users,
};
