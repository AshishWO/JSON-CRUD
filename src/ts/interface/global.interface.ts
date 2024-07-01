//custom error interface
export interface customError extends Error {
    status?: number;
}

//interface for book
export interface book {
    id?: number;
    author: string;
    title: string;
    year: number;
    type: string[];
    readingStatus: boolean;
}
