const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
     //const message = error.statusCode || "An unexpected error occurred"

    res.status(statusCode).json({
        success:false,
        status:statusCode,
        message: error.message || "An unecpected error occurred",
       stack: process.env.NODE_ENV === "development" ? error.stack : null,
    });
  };
  
 export default errorHandler;
  