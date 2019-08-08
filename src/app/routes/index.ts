import * as Koa from 'koa';
import userRoutes from './user-router'

export const initRoutes = (app: Koa) => {
    app.use(userRoutes.routes())
}