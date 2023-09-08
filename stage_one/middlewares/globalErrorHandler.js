import ApiError from '../errors/ApiError.js';

const NODE_ENV = process.env.NODE_ENV;

export const devErrors = (error, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    return res.status(error.statusCode).json({
      status: error.statusCode,
      message: error.message,
      stackTrace: error.stack,
      error: error
    });
  }
}

export const prodErrors = (error, req, res) => {
  if (req.originalUrl.startsWith('/api')) {
    if (error instanceof ApiError && error.isOperational) {
      return res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
      });
    }
    // unkownn error
    console.error(`${error.message}`);
  } else {
    return res.status(500).json({
      status: 'error',
      message: 'Something went wrong, please try again later!'
    })
  }
}

const globalErrorHandler = ((error, req, res, next) => {
  error.statusCode = error.statusCode || 500;
  error.status = error.status || 500;

  if (NODE_ENV === 'development') {
    devErrors(error, req, res);
  } else if (NODE_ENV === 'production') {
    prodErrors(error, req, res);
  }
});

export default globalErrorHandler;
