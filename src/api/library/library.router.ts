import express, { Router } from "express";
import {
    addBook,
    deleteBook,
    getAllBooks,
    getBook,
    updateBook,
} from "./library.controller";

const libraryRoute: Router = express.Router();

//Routes
libraryRoute.get("/", getAllBooks);
libraryRoute.post("/", addBook);
libraryRoute.get("/:id", getBook);
libraryRoute.patch("/:id", updateBook);
libraryRoute.delete("/:id", deleteBook);

export default libraryRoute;
