import mysql  from 'mysql2'

//Database connection set just for creating the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Stepheng',
    port:3306,
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected to MySQL server");
    connection.query('CREATE DATABASE IF NOT EXISTS devtutordb', (error, result) => {
    if (error) throw err;
    console.log(("Database created successfully:", result))
    })
})