import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { customError } from "../ts/interface/global.interface";
import { HttpError } from "../ts/class/httpError";

//Error handler that catches errors globally.
const errorHandler: ErrorRequestHandler = async (
    err: customError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const status: number = err.status || 500;
    const message: string = err.message || "Internal Server Error";

    //if the error is a validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({ status: "Validation error", message });
    }

    //if the error is http error
    if (err instanceof HttpError) {
        return res.status(err.status).json({ status: "error", message });
    }

    //Sending error as response
    res.status(status).json({ status: "error", message });
};

export default errorHandler;
