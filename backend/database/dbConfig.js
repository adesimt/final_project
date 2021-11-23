const mysql = require('mysql');



// create connection
const db = mysql.createConnection({
    
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})


//connect to MySql
db.connect(err => {
    if(err){
        throw err
    }
    console.log('MYSQL Connected')
})

 module.exports = db;