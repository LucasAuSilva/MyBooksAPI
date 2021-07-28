import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.service';

@Controller('/users')
export class UsersControllers {
  constructor(private usersService: UsersService) {}

  @Get()
  public async getAllUsers() {
    return this.usersService.findAll();
  }

  @Post()
  public async createUser(@Body() user: User) {
    return this.usersService.createUser(user);
  }

  @Get('/:id')
  public getOneUser(@Param('id') userId: number) {
    return userId;
  }
}
