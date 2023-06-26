import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async findAllUser(id: string) {
    const findUser = this.prisma.user;

    if (!findUser) {
      throw new Error("Can't Find Any User");
    }

    const foundUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (foundUser.roll !== 'admin') {
      throw new Error('Unauthorized Access');
    }

    return this.prisma.user.findMany({
      include: {
        ticket: true,
      },
    });
  }

  async getSingleUser(id: string) {
    const foundUser = await this.prisma.user.findUnique({
      where: { id },
      include: {
        ticket: true,
      },
    });

    if (!foundUser) {
      throw new NotFoundException('User Not Found');
    }

    if (foundUser.id !== id) {
      throw new ForbiddenException('Unauthorized user');
    }

    delete foundUser.password;

    return { foundUser };
  }

  async userUpdateForAdmin(id: string, roll, subject: string) {
    return this.prisma.user.update({
      where: { id },
      data: {
        roll: roll,
        subject: subject,
      },
    });
  }
}
