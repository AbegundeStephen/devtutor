import mysql from 'mysql2/promise'

// Database connection configuration
const dbConfig= mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:process.env.DB_PASSWORD,
    port:3306,
    database: process.env.DB_NAME
})

 export default dbConfig