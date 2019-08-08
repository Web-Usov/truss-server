import { Context } from 'koa'
import { AppError } from '../../errors'

const httpCodes = {
	10000: 500,
	20000: 404,
	30000: 400,
	30001: 400,
	30002: 401,
	30003: 403
}

export default async (ctx: Context, next: () => Promise<any>) => {
	try {
		await next()
	} catch (err) {

		if (err instanceof AppError) {
			ctx.body = err.toModel()
			ctx.status = httpCodes[err.code] ? httpCodes[err.code] : 500
		} else {			
			ctx.body = new AppError(10000, 'Internal Error Server', err).toModel()
			ctx.status = 500
		}
	}
}