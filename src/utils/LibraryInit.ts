import path from "path";
import fs from "fs";

export const initLibrary = () => {
    if (!fs.existsSync(path.resolve("library.json"))) {
        try {
            fs.writeFileSync(path.resolve("library.json"), "[]");
        } catch (err) {
            console.error(err);
        }
    }
};
