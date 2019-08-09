import AppError from "./appError";

export class NotFoundError extends AppError {
    constructor(message: string) {
        super(20000, message)
    }
}

export default NotFoundError