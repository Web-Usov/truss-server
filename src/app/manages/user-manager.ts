import { User } from '../entity';
import { getRepository } from 'typeorm';
import { NotFoundError } from '../../errors';

export default class UserManager {
    static async getAll(): Promise<User[]> {
        const repo = getRepository(User)
        const users = await repo.find()
        return users
    }

    static async getById(id: number): Promise<User> {
        const repo = getRepository(User)
        const user = await repo.findOne(id)
        if (!user) throw new NotFoundError("User not found")
        return user
    }

    static async addUser(_user: User): Promise<User> {
        const repo = getRepository(User)
        return await repo.save(_user)
    }
}
