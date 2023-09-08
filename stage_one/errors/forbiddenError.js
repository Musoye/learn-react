import ApiError from './ApiError.js';

// handles forbidden access
export default class ForbiddenError extends ApiError {
  constructor(message) {
    super(message, 403);
  }
}
