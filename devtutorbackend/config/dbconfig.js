import mysql from 'mysql2/promise'
// Database connection configuration

const dbConfig= mysql.createPool({
    host: 'localhost',
    user: 'root',
    password:'Stepheng',
    port:3306,
    database:  'devtutordb'
})

 export default dbConfig