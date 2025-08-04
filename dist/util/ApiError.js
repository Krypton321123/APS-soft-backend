export default class ApiError extends Error {
    constructor(message, statusCode, data = {}, stack = "", errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.errors = errors;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
