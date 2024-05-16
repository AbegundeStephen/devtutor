import express from 'express'
import { createUser,findAllUsers,login,logoutUser } from '../controllers/userController.js';
import protectecRoute from '../middlewares/authMiddleware.js';

const userRoutes = express.Router()
// Register a new user
userRoutes.post('/register',createUser);

// Get all users
userRoutes.get('/getall',protectecRoute,findAllUsers)

// User login
userRoutes.post('/login', login);

//Logout user
userRoutes.post('/logout',logoutUser)

export default userRoutes;
