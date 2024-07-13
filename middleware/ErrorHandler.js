const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error("Error:", err);
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message,
        stack: process.env.NODE_MODE === 'production' ? null : err.stack 
    });
    next(err)
};
const notFoundMidware = (req, res, next) => {
    //    middleware not found
    const error = new Error(`Not Found-${req.orignalurl}`)
    res.status(404).json({
        status: 'fail',
        message: 'Invalid route'    
    })
    next(error)
};

module.exports = { errorHandler, notFoundMidware }