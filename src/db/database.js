import mysql from 'mysql2';
import config from '../config.js';

const conn = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements: true
});

export default conn;