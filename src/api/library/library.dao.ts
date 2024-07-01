import { HttpError } from "../../ts/class/httpError";
import { book } from "./../../ts/interface/global.interface";
import { readLibrary, writeLibrary } from "../../services/libraryFile";

//Insert a book method
export const insertBook = (book: book): book => {
    const bookData = readLibrary();
    book.id = bookData.length + 1;
    bookData.push(book);
    writeLibrary(bookData);
    return book;
};

//Get a book by id method
export const getBookById = (bookId: number): book => {
    const bookData = readLibrary();
    const book = bookData.find((book) => book.id === bookId);
    if (!book) {
        throw new HttpError("Book not found", 404);
    }
    return book;
};

//update a book method
export const updateBookDAO = (bookId: number, book: book): book => {
    const bookData = readLibrary();
    delete book.id;
    const bookIndex = bookData.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) {
        throw new HttpError("Book not found", 404);
    }

    bookData[bookIndex] = { ...bookData[bookIndex], ...book };
    writeLibrary(bookData);
    return bookData[bookIndex];
};

//Delete a book method
export const deleteBookDAO = (bookId: number) => {
    const bookData = readLibrary();
    const bookIndex = bookData.findIndex((book) => book.id === bookId);
    if (bookIndex === -1) {
        throw new HttpError("Book not found", 404);
    }
    bookData.splice(bookIndex, 1);
    writeLibrary(bookData);
};
