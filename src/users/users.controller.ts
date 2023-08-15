import {
  Body,
  Controller,
  Delete,
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

  // assistance User Getting by only admin
  @UseGuards(JwtAuthGuard)
  @Get('/assistance')
  assistance(@GetCurrentUserById() id: string) {
    try {
      return this.usersService.assistance(id);
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
  @Patch()
  userUpdateForAdmin(@Body() updateUserDto: UpdateUserDto) {
    try {
      return this.usersService.userUpdateForAdmin(updateUserDto);
    } catch {
      throw new NotFoundException('User Not Found');
    }
  }
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    try {
      return this.usersService.deleteUser(id);
    } catch {
      throw new NotFoundException('User Not Found');
    }
  }
}
