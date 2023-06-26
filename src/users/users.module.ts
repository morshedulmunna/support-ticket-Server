import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaClient, JwtStrategy],
})
export class UsersModule {}
