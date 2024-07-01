//Http Error class extended from Error
export class HttpError extends Error {
    constructor(message: string, public status: number) {
        super(message);
        this.status = status;
    }
}
