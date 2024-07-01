import { Request } from "express";
import { readLibrary } from "../../services/libraryFile";
import { book } from "../../ts/interface/global.interface";
import { bookValidationSchema } from "./library.validation";
import { insertBook, updateBookDAO } from "./library.dao";

const getAllBooks = async (req: Request) => {
    try {
        const page: number = Number(req.query.page) || 1;
        const limit: number = Number(req.query.limit) || 10;
        const startIndex: number = (page - 1) * limit;
        const endIndex: number = page * limit;

        const bookData: book[] = readLibrary();
        const paginatedBooks: book[] = bookData.slice(startIndex, endIndex);
        return {
            data: paginatedBooks,
            metadata: {
                limit,
                page,
                total: bookData.length,
                totalPages: Math.ceil(bookData.length / limit),
            },
        };
    } catch (error) {
        throw error;
    }
};
const addBook = async (req: Request) => {
    try {
        const book = req.body;
        await bookValidationSchema.validate(book);

        const newBook = insertBook(book);
        return { data: newBook };
    } catch (error) {
        throw error;
    }
};

const updateBook = async (req: Request) => {
    try {
        const id: number = parseInt(req.params.id);
        const book = req.body;
        await bookValidationSchema.validate(book);
        const updatedBook = updateBookDAO(id, book);
        return { data: updatedBook };
    } catch (error) {
        throw error;
    }
};
export default { getAllBooks, addBook, updateBook };
