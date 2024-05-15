import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

//Middleware to ensure user is logged in
const protectecRoute = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
          res.status(401);
          throw new Error("You are not authorized, please login");
        }
    
        // Verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // Get user id from token
        const user = await User.findById(verified.id).password;
    
        if (!user) {
          res.status(401);
          throw new Error("User not found");
        }
        req.user = user;
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, please login");
      }
    });
    
    export default protectecRoute