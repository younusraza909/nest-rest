import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()             //GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    @Get(':id')       // GET /users/:id
    findOne(@Param("id") id: string) {
        return this.usersService.findOne(+id)
    }

    @Post()            //POST /users
    createOne(@Body() user: { name: string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.createOne(user)
    }

    @Patch(':id')      //PATCH /users/:id
    updateOne(@Param('id') id: string, @Body() userUpdate: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        return this.usersService.updateOne(+id, userUpdate)
    }

    @Delete(':id')    //DELETE /users/:id
    deleteOne(@Param("id") id: string) {
        return this.usersService.deleteOne(+id)
    }
}
