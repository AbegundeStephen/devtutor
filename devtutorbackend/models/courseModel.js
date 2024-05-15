import dbConfig from '.././config/dbconfig.js'

// courses controller model object

 const Courses = {
  // Method to get all courses
  findAll: async () => {
    try {
      let sql = 'SELECT * FROM courses';
     const courses = await dbConfig.query(sql)
     return courses[0]
    }catch(err) {
      console.log(err)
    }
  },

  // Method to find a course by ID
  findById: async (id, result) => {
    try {
     let query = 'SELECT * FROM courses WHERE id = ?'
     const course = await dbConfig.query(query,[id])
     return course[0]
    }catch(err) {
     console.log(err)
    }
   dbConfig.query( [id], (err, res) => {
      if (err) {
        console.error('Error while fetching course by id', err);
        result(null, err);
        return;
      }
      result(null, res[0]);
    });
  },

  // Method to create a new course
  create:  async (newCourse) => {
    try {
       let query = 'INSERT INTO courses SET ?'
       const new_course = await dbConfig.query(query, newCourse)
       return {id:new_course.insertId, ...new_course}
  
      }catch(err) {
      console.log(err)
      }
    },

  // Method to update a course by ID
  updateById: async (id, course,) => {
     try {
      let updatedCourse = await dbConfig.query(
        'UPDATE courses SET title = ?, description = ?, imageUrl = ?, videoUrl = ? WHERE id = ?',
        [course.title, course.description, course.imageUrl, course.videoUrl, id])
      return updatedCourse
     }catch(err) {
        console.log(err)
     }
  },

  // Method to delete a course by ID
  deleteById: async (id, result) => {
    try{
      let deletedCourse = await dbConfig.query('DELETE FROM courses WHERE id = ?', [id])
      return result(null,"Course deleted successfully",deletedCourse)
     }catch(err) {
       console.log("Unable to delete course",err)
     }
   
  }
};

export default Courses