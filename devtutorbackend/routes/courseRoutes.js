import express from 'express';
import { getAllCourses, getCourseById, createCourse, updateCourse, deleteCourse, } from '../controllers/courseController.js';
import protectedRoute from '../middlewares/authMiddleware.js'


const coursesRoutes = express.Router();

// Route to get all courses
coursesRoutes.get('/getall', getAllCourses);

// Route to get a single course by id
coursesRoutes.get('/getcourse/:id', getCourseById);

// Route to create a new course
coursesRoutes.post('/createcourse', createCourse);

// Route to update a course by id
coursesRoutes.put('/updatecourse/:id', updateCourse);

// Route to delete a course by id
coursesRoutes.delete('/deletecourse/:id', deleteCourse);

export default coursesRoutes;
