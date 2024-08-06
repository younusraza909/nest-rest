import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';


@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "email": "Sincere@april.biz",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "email": "Shanna@melissa.tv",
            "role": "INTERN",
        },
        {
            "id": 3,
            "name": "Clementine Bauch",
            "email": "Nathan@yesenia.net",
            "role": "ENGINEER",
        },
        {
            "id": 4,
            "name": "Patricia Lebsack",
            "email": "Julianne.OConner@kory.org",
            "role": "ENGINEER",
        },
        {
            "id": 5,
            "name": "Chelsey Dietrich",
            "email": "Lucio_Hettinger@annie.ca",
            "role": "ADMIN",
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {

            const usersWithRole = this.users.filter(user => user.role === role)

            if (usersWithRole.length === 0) {
                throw new NotFoundException('User role not found')
            }

            return usersWithRole
        }
        return this.users
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id)

        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user
    }

    createOne(user: CreateUserDto) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)

        const newUser = {
            id: userByHighestId[0].id + 1,
            ...user
        }

        this.users.push(newUser)

        return newUser
    }

    updateOne(id: number, user: UpdateUserDto) {
        this.users = this.users.map(u => u.id === id ? { ...u, ...user } : { ...u })

        return this.findOne(id)
    }

    deleteOne(id: number) {
        const removedUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== removedUser.id)

        return removedUser
    }
}
