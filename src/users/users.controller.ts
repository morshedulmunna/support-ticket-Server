import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { GetCurrentUserById } from '../utils';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('all')
  findAllUser(@GetCurrentUserById() id: string) {
    try {
      return this.usersService.findAllUser(id);
    } catch {
      throw new NotFoundException('User Not Found');
    }
  }

  // Done
  @UseGuards(JwtAuthGuard)
  @Get('single')
  getSingleUser(@GetCurrentUserById() id: string) {
    return this.usersService.getSingleUser(id);
  }

  // When super admin create a new admin and submit the make admin button then call this part
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  userUpdateForAdmin(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      const { roll, subject } = updateUserDto;
      return this.usersService.userUpdateForAdmin(id, roll, subject);
    } catch {
      throw new NotFoundException('User Not Found');
    }
  }
}
