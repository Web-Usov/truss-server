export class AppError extends Error {
    public code: number
    public error: Error

    constructor(code: number, message: string, error?: Error) {
        super(message)

        this.code = code
        this.error = error
    }

    public toModel() {
        return {
            code: this.code,
            message: this.message + (this.error && this.error.message ? ' - ' + this.error.message : ""),
        }
    }
}

export default AppError