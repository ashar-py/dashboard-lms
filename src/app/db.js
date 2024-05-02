// // db.js

const sql = require('mssql');

const config = {
  user: 'anzasjpr_postcomp',
  password: 'hP.W8^d1&pNO',
  server: '207.174.214.239', // You can use 'localhost' if running locally
  database: 'anzasjpr_postcompletions',
};

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then((pool) => {
    console.log('Connected to SQL Server');
    return pool;
  })
  .catch((err) => console.log('Database Connection Failed! Bad Config: ', err));

// module.exports = {
//   sql,
//   poolPromise,
// };



const users = [
  {
    id: 1,
    username: 'user1',
    email: 'prasadvijaypawar6499@gmail.com',
    password: 'password1',
  },
  {
    id: 2,
    username: 'user2',
    email: 'chaudharibhagyesh123@gmail.com',
    password: 'password2',
  },
  // Add more sample users as needed
];

module.exports = {
  sql,
  poolPromise,
  users,
};

