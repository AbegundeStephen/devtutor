//import mysql from 'mysql2';
import dbConfig from '.././config/dbconfig.js'; // Ensure you have a dbConfig configuration for MySQL

export const Enrollment = {
  // Method to get all enrollments
  findAll: (result) => {
    dbConfig.query('SELECT * FROM enrollments', (err, res) => {
      if (err) {
        console.error('Error while fetching enrollments', err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  },

  // Method to find an enrollment by ID
  findById: (id, result) => {
    dbConfig.query('SELECT * FROM enrollments WHERE id = ?', [id], (err, res) => {
      if (err) {
        console.error('Error while fetching enrollment by id', err);
        result(null, err);
        return;
      }
      result(null, res[0]);
    });
  },

  // Method to create a new enrollment
  create: (newEnrollment, result) => {
    dbConfig.query('INSERT INTO enrollments SET ?', newEnrollment, (err, res) => {
      if (err) {
        console.error('Error while creating the enrollment', err);
        result(null, err);
        return;
      }
      result(null, { id: res.insertId, ...newEnrollment });
    });
  },

  // Method to update an enrollment by ID
  updateById: (id, enrollmentData, result) => {
    dbConfig.query(
      'UPDATE enrollments SET course_id = ?, user_id = ?, enrollment_date = ? WHERE id = ?',
      [enrollmentData.course_id, enrollmentData.user_id, enrollmentData.enrollment_date, id],
      (err, res) => {
        if (err) {
          console.error('Error while updating the enrollment', err);
          result(null, err);
          return;
        }
        result(null, { id: id, ...enrollmentData });
      }
    );
  },

  // Method to delete an enrollment by ID
  deleteById: (id, result) => {
    dbConfig.query('DELETE FROM enrollments WHERE id = ?', [id], (err, res) => {
      if (err) {
        console.error('Error while deleting the enrollment', err);
        result(null, err);
        return;
      }
      result(null, res);
    });
  }
};
