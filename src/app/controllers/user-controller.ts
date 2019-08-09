import {Context} from 'koa';
import { User } from '../entity';
import { UserManager } from '../manages';

export default class UserController {
    static getAll = async (ctx:Context)=> {
        const users = await UserManager.getAll()      
        ctx.body = users
    }

    static getById = async (ctx: Context) => {
        const user = await UserManager.getById(ctx.params.id)
        ctx.body = user
    }
    static addUser = async (ctx: Context) => {        
        const userProps = (ctx.request.body as User)
        let user = new User()
        user.email = userProps.email
        user.name = userProps.name
        user.password = userProps.password
        user.age = userProps.age        
        user = await UserManager.addUser(user)
        ctx.body = user
    }
}