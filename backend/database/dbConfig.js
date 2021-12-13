const mysql = require('mysql');



// create connection
const db = mysql.createConnection({
    
    // host: process.env.HOST,
    // user: process.env.USER,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE
    
    host: "127.0.0.1",
    user: "root",
    password: "1920Nov@1",
    database: "fitness_app_db"
})


//connect to MySql
db.connect(err => {
    if(err){
        throw err
    }
    console.log('MYSQL Connected')
})

 module.exports = db;