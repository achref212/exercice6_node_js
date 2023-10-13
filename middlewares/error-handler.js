export function notFoundError(req, res, next) {
    console.log("hello");
    const error = new Error('Not Found');
    error.status = 404;
    next(error)
}

export function errorHandler(error, req, res, next) {
    console.log("hello");
    res.status(error.status || 500).json({
        message: error.message,
    });
    next()
}