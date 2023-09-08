import ApiError from './ApiError.js';

// unauthorized access error
export default class UnauthorizedError extends ApiError {
  constructor(message) {
    super(message, 401);
  }
};
