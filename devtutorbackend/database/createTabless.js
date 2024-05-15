import mysql from 'mysql2'

//Connection set and configuration for creating tables in the database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Stepheng',
    port:3306,
    database:'devtutorDB'
})
connection.connect((error) => {
    if (error) throw error;
    console.log('Connected to the devTutor database');

    const createUser = `
    CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL, -- Store hashed passwords, not plain text,
        email VARCHAR(100),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
      `

    const createCoursesTable = `
    CREATE TABLE IF NOT EXISTS courses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        price INT NOT NULL,
        imageUrl VARCHAR(255),
        videoUrl VARCHAR(255)
    );
    `
    ;
    
    const createEnrollmentTable = `
    CREATE TABLE IF NOT EXISTS enrollments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        course_id INT,
        user_id INT,
        enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (course_id)
        REFERENCES courses(id)
    );
    `
    connection.query(createUser,(error,result) => {
        if (error) throw error;
        console.log('users table created successfully ', result)
    })

    connection.query(createCoursesTable,(error,result) => {
        if (error) throw error;
        console.log('courses table created successfully ',result)
    })
    
    connection.query(createEnrollmentTable, (error, result) => {
        if (error) throw error;
        console.log("Enrollment table succesfully created ",result)
    })

    
})

