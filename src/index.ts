import express, { Application } from "express";
import dotenv from "dotenv";
import libraryRoute from "./api/library/library.router";
import errorHandler from "./utils/errorHandler";
import { initLibrary } from "./utils/LibraryInit";

dotenv.config();
const port: number = Number(process.env.PORT || 8080);
const app: Application = express();

app.use(express.json());

//library route
app.use("/library", libraryRoute);

//errorHandler
app.use(errorHandler);

app.listen(port, () => {
    initLibrary();
    console.log(`server listening on port ${port}`);
});
