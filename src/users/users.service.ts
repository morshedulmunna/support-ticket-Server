import { PrismaClient } from '@prisma/client';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Request } from 'express';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  findAll() {
    const findUser = this.prisma.user;

    if (!findUser) {
      throw new Error("Can't Find Any User");
    }

    return this.prisma.user.findMany();
  }

  async findOne(id: string, req: Request) {
    const decodedUserInfo = req.user as { id: string; email: string };

    const foundUser = await this.prisma.user.findUnique({ where: { id } });

    if (!foundUser) {
      throw new NotFoundException();
    }

    if (foundUser.id !== decodedUserInfo.id) {
      throw new ForbiddenException();
    }

    delete foundUser.password;

    return { user: foundUser };
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
