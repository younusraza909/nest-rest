import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()             //GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return this.usersService.findAll(role)
    }

    @Get(':id')       // GET /users/:id
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.findOne(id)
    }

    @Post()            //POST /users
    createOne(@Body() user: CreateUserDto) {
        return this.usersService.createOne(user)
    }

    @Patch(':id')      //PATCH /users/:id
    updateOne(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: UpdateUserDto) {
        return this.usersService.updateOne(id, userUpdate)
    }

    @Delete(':id')    //DELETE /users/:id
    deleteOne(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.deleteOne(id)
    }
}
