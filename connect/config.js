const mysql = require("mysql")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ml_game'
})

connection.connect((error) => {
    if (error) throw error
    console.log("database Connected")
})

module.exports = connection