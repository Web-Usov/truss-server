import * as Koa from 'koa'
import * as middlewares from './middlewares' 
import * as bodyPareser from 'koa-bodyparser'
import {initRoutes} from './routes'

const app = new Koa()
// Body Parser
app.use(bodyPareser())
// Logger
app.use(middlewares.Logger)
// Response Time
app.use(middlewares.ResponeTime)
// Error Handler
app.use(middlewares.ErrorHandler)

initRoutes(app)


export default app