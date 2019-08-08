import * as Koa from 'koa';
export default async (ctx : Koa.ParameterizedContext, next :() =>  Promise<any>) => {
    await next()
    const rt = ctx.response.get('X-Response-Time')
    console.log(`${ctx.method} ${ctx.url} - ${rt}ms`);
}