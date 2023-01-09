require('dotenv').config();
const fs = require('fs');

var mysql = require('mysql');

var connection = mysql.createConnection({
    port: "3306",
    host: "dbhrms.mysql.database.azure.com",
    user: "dbadmin",
    password: "Hrms1234",
    database: "hrms",
    multipleStatements: true
});

module.exports = connection;