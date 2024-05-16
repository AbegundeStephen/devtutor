import express from 'express';
import { getAllEnrollments, getEnrollmentById, createEnrollment, updateEnrollment, deleteEnrollment } from '.././controllers/enrollmentController.js';

const enrollmentRoutes= express.Router();

// Route to get all enrollments
enrollmentRoutes.get('/', getAllEnrollments);

// Route to get a single enrollment by id
enrollmentRoutes.get('/:id', getEnrollmentById);

// Route to create a new enrollment
enrollmentRoutes.post('/', createEnrollment);

// Route to update an enrollment by id
enrollmentRoutes.put('/:id', updateEnrollment);

// Route to delete an enrollment by id
enrollmentRoutes.delete('/:id', deleteEnrollment);

export default enrollmentRoutes;
