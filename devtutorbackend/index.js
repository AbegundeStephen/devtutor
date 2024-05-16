import express from "express"
import dotenv from "dotenv/config.js"
import cors from "cors"
import coursesRoutes from "./routes/courseRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import protectecRoute from "./middlewares/authMiddleware.js"
import errorHandler from "./middlewares/errorMiddleware.js"
import cookieParser from "cookie-parser"



const app = express();


// set up all the required middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));
//Incase there ia an error,app should use the error middleware
app.use(errorHandler);

app.use("/api/courses",protectecRoute,coursesRoutes);
app.use("/api/users",userRoutes);
app.get("/*", (req,res) => {
    res.json("WELCOME TO THE COURSE ENROLLMENT API")
    
})



// Start the server
const PORT = process.env.PORT 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
