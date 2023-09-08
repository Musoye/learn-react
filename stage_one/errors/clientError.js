import ApiError from './ApiError.js';

// handles client side error
export default class ClientError extends ApiError {
  constructor(message) {
    super(message, 400);
  }
}
