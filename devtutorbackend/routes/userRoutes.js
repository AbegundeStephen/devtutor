import express from 'express'
import { createUser,login,logoutUser } from '../controllers/userController.js';
import bcrypt from 'bcrypt'

const userRoutes = express.Router()
// Register a new user
userRoutes.post('/register',createUser);

// User login
userRoutes.post('/login', login);

//Logout user
userRoutes.post('/logout',logoutUser)

export default userRoutes;
