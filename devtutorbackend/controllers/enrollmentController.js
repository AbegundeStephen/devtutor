import { Enrollment } from '.././models/enrollmentModel.js';

// Controller for getting the list of all enrollments
export const getAllEnrollments = async (req, res) => {
  try {
    const enrollments = await Enrollment.findAll();
    res.status(200).json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving enrollments', error: error });
  }
};

// Controller for getting a single enrollment by ID
export const getEnrollmentById = async (req, res) => {
  try {
    const enrollment = await Enrollment.findById(req.params.id);
    if (enrollment) {
      res.status(200).json(enrollment);
    } else {
      res.status(404).json({ message: 'Enrollment not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving enrollment', error: error });
  }
};

// Controller for creating a new enrollment
export const createEnrollment = async (req, res) => {
  try {
    const newEnrollment = await Enrollment.create(req.body);
    res.status(201).json(newEnrollment);
  } catch (error) {
    res.status(500).json({ message: 'Error creating enrollment', error: error });
  }
};

// Controller for updating an enrollment
export const updateEnrollment = async (req, res) => {
  try {
    const updatedEnrollment = await Enrollment.updateById(req.params.id, req.body);
    res.status(200).json(updatedEnrollment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating enrollment', error: error });
  }
};

// Controller for deleting an enrollment
export const deleteEnrollment = async (req, res) => {
  try {
    await Enrollment.deleteById(req.params.id);
    res.status(200).json({ message: 'Enrollment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting enrollment', error: error });
  }
};
