import Courses from '.././models/courseModel.js'

// Controller for getting the list of all courses
export const getAllCourses = async (req, res) => {
  try {
    const allCourses =  await Courses.findAll();
    res.status(200).json(allCourses);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Error retrieving courses', error: error });
  }
};

// Controller for getting a single course by ID
export const getCourseById = async (req, res) => {
  try {
    const {id} = req.params
    const course = await Courses.findById(id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving course', error: error });
  }
};

// Controller for creating a new course
export const createCourse = async (req, res) => {
  try {
    const newCourse = await Courses.create(req.body);
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error: error });
  }
};

// Controller for updating a course
export const updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Courses.updateById(req.params.id, req.body);
    res.status(200).json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error: error });
  }
};

// Controller for deleting a course
export const deleteCourse = async (req, res) => {
  try {
    await Courses.deleteById(req.params.id);
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error: error });
  }
};
