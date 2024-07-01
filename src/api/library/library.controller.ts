import { NextFunction, Request, RequestHandler, Response } from "express";
import { bookValidationSchema } from "./library.validation";
import { deleteBookDAO, getBookById } from "./library.dao";
import libraryService from "./library.service";

// Get all books request handler
export const getAllBooks: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await libraryService.getAllBooks(req);
        res.status(200).json({
            status: "SUCCESS",
            ...result,
        });
    } catch (error) {
        next(error);
    }
};

//Add a new book request handler
export const addBook: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await libraryService.addBook(req);

        res.status(200).json({
            status: "SUCCESS",
            message: "Book added to library successfully",
            ...result,
        });
    } catch (error) {
        next(error);
    }
};

//Get a book by its id
export const getBook: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const book = getBookById(parseInt(req.params.id));

        res.status(200).json({ status: "SUCCESS", data: book });
    } catch (error) {
        next(error);
    }
};

//Update a book by id
export const updateBook: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const result = await libraryService.updateBook(req);

        res.status(200).json({
            status: "SUCCESS",
            message: "Book updated successfully",
            ...result,
        });
    } catch (error) {
        next(error);
    }
};

//Delete book by id
export const deleteBook: RequestHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        deleteBookDAO(parseInt(req.params.id));
        res.status(200).json({
            status: "SUCCESS",
            message: "Book deleted successfully",
        });
    } catch (error) {
        next(error);
    }
};
