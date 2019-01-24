// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'root'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');

// this will also make a connection pool using mysql2 package
// sol will export it like same
const sequelize = new Sequelize('node-complete','root','root', {
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;