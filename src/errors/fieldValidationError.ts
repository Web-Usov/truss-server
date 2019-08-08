import AppError from "./appError";
import FieldError from "./fieldError";

export class FieldValidationError extends AppError {
    public fields: FieldError[]

    constructor(message: string, fields: FieldError[], error?: Error) {
        super(30001, message, error)
        this.fields = fields
    }

    public toModel() {
        return {
            code: this.code,
            message: this.message,
            fields: this.fields
        }
    }
}

export default FieldValidationError