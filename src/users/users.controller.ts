import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()             //GET /users
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return []
    }

    @Get(':id')       // GET /users/:id
    findOne(@Param("id") id: string) {
        return {}
    }

    @Post()            //POST /users
    createOne(@Body() user: {}) {
        return {}
    }

    @Patch(':id')      //PATCH /users/:id
    editOne(@Param('id') id: string, @Body() userUpdate: {}) {
        return {}
    }

    @Delete(':id')    //DELETE /users/:id
    deleteOne(@Param("id") id: string) {
        return {}
    }
}
