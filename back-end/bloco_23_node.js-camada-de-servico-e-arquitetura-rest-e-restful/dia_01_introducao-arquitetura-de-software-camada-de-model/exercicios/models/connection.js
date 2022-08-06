const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'wbomfim',
	password: '@Trybe123',
	database: 'Users_Crud' });

module.exports = connection;
