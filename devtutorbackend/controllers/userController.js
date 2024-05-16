import User  from '../models/userModel.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'

const secretKey = process.env.JWT_SECRET // to be later stored as an environment variable

// Lets generateate token by signing a unique user id
const generateToken = (id) => {
   let token = jwt.sign({id}, secretKey, {expiresIn:"1d"});
    return token

}

// Controller for creating a new user
export const createUser = asyncHandler(async (req, res) => {
  const {username, email, password} = req.body;
   // Validate the presence of input data
  if (!username || !email || !password) {
        res.status(400).json({message:"Please fill in all required fields"});
        //throw new Error("Please fill in all required fields")
    }
// Verify password length
    if (password.length < 8) {
      res.status(400).json({message:"Password must not be less than 8 characters"});
      //throw new Error("Password must not be less than 8 characters")
  }

  //check if the email exist in the database
  const existingUser = await User.findByEmail(email)
  console.log("Existing user",existingUser)
  if (existingUser) {
   return res.status(400).json({message:"Email already exist"});  
 }
 //Hash the password
 const hashedPassword = await User.hashPassword(password)

 //Now lets try and create a new user
  try {

    const newUser = await User.createUser({username,email, password:hashedPassword});
         //Generate token for the new user
         const token =  generateToken(newUser.id)

         if (newUser) {
          
         //Store the token as http cookie
         res.cookie("token",token, {
          path: "/",
          httpOnly: true,
          expires: new Date(Date.now() + 1000 * 86400), //cookie expiry day set to 1 day
          sameSite: "none",
          secure: true,
       });

          const {username,email} = newUser
          res.status(201).json({message:"User created successfully", username,email,token,})
       } else {
          res.status(400).json({message:"Invalid user data"})
          //throw new Error ("Invalid user data");
       }

  } catch (error) {
    throw error
   
  }
});

//Find all users

export const findAllUsers = asyncHandler( async (req,res) => {
  try {

    const result = await User.findAll()
    console.log(result)
    if (result.length === 0) {
      res.status(401).json({message:"Error fetching Users list"})
    }else {
      res.status(200).json({message:"Users list fetched successfully", users:result})

    }

    
  }catch(error) {
    res.status(500).json({message:"Server error", error:error})
  }
 
})
//login user

export const login = asyncHandler(async (req, res) => {
  const {email, password} = req.body;

  // Validate Inputs
  if (!email || !password) {
    res.status(400);
    throw new Error("Please add email and password")
  }

try {
  const result = await User.login(email,)
  if (result.length === 0){
    return res.status(401).json({message:"Invalid credentials"})
  }
  const validPassword = await bcrypt.compare(password, result[0].password) 

  if (!validPassword) {
    return res.status(401).json({message:"Invalid password"})
  }
  

  //Obtain the user id
  const user = result[0].id
  //generate a user token by signing the user
  const token = generateToken(user)
  console.log("generated token", token)
  //set token in an HTTP only cookie
  res.cookie("token",token, {
           path: "/",
           httpOnly: true,
           expires: new Date(Date.now() + 1000 * 86400),// cookie expiry set to 1 day
           sameSite: 'none',
           secure: true,
        });
  return res.status(200).json({message:"Login successfull", token})


}catch(error){
  console.log(error)
}

})
//Logout  User
export const logoutUser = asyncHandler(async (req,res) => {
  res.cookie("token", "", {
     path: "/",
     httpOnly: true,
     expires: new Date(0),
     sameSite: "none",
     secure: true,
  });

  res.status(200).json({message: "Logged out successfully"})
});

