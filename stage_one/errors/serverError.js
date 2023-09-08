import ApiError from './ApiError.js';

// handles server side error
export default class ServerError extends ApiError {
  constructor(message) {
    super(message, 500);
  }
};
