import * as Koa from 'koa';
export default async (ctx : Koa.ParameterizedContext, next : () => Promise<any>) => {
    const time = Date.now()
    await next()
    ctx.set('X-Response-Time', Date.now() - time + "")
}