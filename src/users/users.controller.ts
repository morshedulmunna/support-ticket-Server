import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { GetCurrentUserById } from '../utils';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAllUser(@GetCurrentUserById() id: string) {
    return this.usersService.findAllUser(id);
  }

  // Done
  @UseGuards(JwtAuthGuard)
  @Get('single')
  getSingleUser(@GetCurrentUserById() id: string) {
    return this.usersService.getSingleUser(id);
  }
}
