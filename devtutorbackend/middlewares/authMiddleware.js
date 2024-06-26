import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'

//Middleware to ensure the user's token that is stored in the cookie is valid.
//this would be used to protect some routes and prevent acces to some pages
const protectecRoute = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies.token;
        console.log(token)
        if (!token) {
          res.status(401).json({mesage:"You are not authorized, please login"})
        }
    
        // Verify Token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        // Get user from the verified token
        const user = await User.findById(verified.id)
        console.log('user: ' + JSON.stringify(user))
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
    
    export default protectecRoute;