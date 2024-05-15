import dbConfig from '../config/dbconfig.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'





const User = {
    // hash password before saving to the database
    hashPassword: async (password) => {
        try {
            const hashedPasword = await bcrypt.hash(password,10);
            return hashedPasword
        }catch(err) {
            throw err;
        }
    },
    
    //create user
    createUser: async (userData, result) => {
        try {
            const newUser = await dbConfig.query('INSERT INTO users SET ?',userData)
            return newUser
        }catch(err) {
            throw err
        }
    },

    //Get user by id
   findById: async (id) => {
    try {
        let user = await dbConfig.query('SELECT * FROM users WHERE id = ?',[id])
        return user[0]
    }catch(err) {
        throw err
    }
   },
    // Find users by email
    findByEmail: async (email) => {
        try {
            let user = await dbConfig.query('SELECT * FROM users WHERE email = ?',[email])
            return user[0]
        }catch(err) {
            throw err
        }
    },
   //Login User
   login: async (email) => {
    try {
        let results = await dbConfig.query('SELECT * FROM users WHERE email = ?',[email,])
        return results[0]
    }catch(err) {
        throw err
    }
   },

   logout: async () => {

    
   }

}

export default User