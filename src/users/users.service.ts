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
      select: {
        id: true,
        name: true,
        email: true,
        roll: true,
        assign_to: true,
      },
      orderBy: {
        createAt: 'desc',
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

  async userUpdateForAdmin(body: any) {
    const { id, roll, assign_to } = body;

    const res = this.prisma.user.update({
      where: {
        id: body.id,
      },
      data: {
        roll: 'assistance', // Update the roll field with the new value
        assign_to: {
          connect: {
            categoryID: assign_to,
          },
        }, // Update the assign_to field with the new value
      },
    });

    return res;
  }

  async assistance(id: string) {
    const foundUser = await this.prisma.user.findUnique({
      where: { id },
    });

    if (foundUser.roll !== 'admin') {
      throw new Error('Can not getting assistance info');
    }

    return this.prisma.user.findMany({
      where: {
        roll: 'assistance',
      },
    });
  }

  async deleteUser(id: string) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });

    return {
      message: `Deleted successfully`,
    };
  }
}
