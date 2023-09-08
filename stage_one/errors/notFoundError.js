import ApiError from './ApiError.js';

// not found error
export default class NotFoundError extends ApiError {
  constructor(message) {
    super(message, 404);
  }
};
