import fs from "fs";
import path from "path";
import { book, customError } from "../ts/interface/global.interface";

//Reading library.json
export const readLibrary = (): book[] => {
    try {
        let fileData = fs.readFileSync(path.resolve("library.json"), "utf-8");
        return JSON.parse(fileData) || [];
    } catch (err) {
        throw new Error("Unable to read library");
    }
};

//Writing library.json
export const writeLibrary = (fileData: book[]): boolean => {
    const data: string = JSON.stringify(fileData);
    try {
        fs.writeFileSync(path.resolve("library.json"), data);
        return true;
    } catch (err) {
        throw new Error("Unable to write library");
    }
};
