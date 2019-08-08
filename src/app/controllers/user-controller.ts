import * as Koa from 'koa';
import { User } from '../entity';
import { getRepository } from 'typeorm';

export default class UserController {
    static getAll = async (ctx:Koa.Context)=> {
        const repo = getRepository(User)
        const users = await repo.find()        
        ctx.body = users
    }

    static getById = async (ctx: Koa.Context) => {
        const repo  = getRepository(User)
        let user = await repo.findOne(ctx.params.id)
        ctx.body = user
    }
    static addUser = async (ctx: Koa.Context) => {
        
        const userProps = (ctx.request.body as User)
        const repo = getRepository(User)
        let user = new User()
        user.email = userProps.email
        user.name = userProps.name
        user.password = userProps.password
        user.age = userProps.age
        
        user = await repo.save(user)
        ctx.body = user
    }
}