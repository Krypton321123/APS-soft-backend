import ApiError from "./ApiError.js";
export const globalCatch = (err, req, res, next) => {
    console.log("err: ", err);
    const statusCode = err.statusCode || 500;
    const message = err.message || "Something went wrong";
    return res.status(statusCode).json(new ApiError(message, statusCode, {}, err.stack, err.errors));
};
