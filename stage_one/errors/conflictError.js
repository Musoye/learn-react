import ApiError from './ApiError.js';

export default class ConflictError extends ApiError {
  constructor(message) {
    super(message, 409);
  }
};

