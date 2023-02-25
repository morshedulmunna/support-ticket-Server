import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaClient, JwtStrategy],
})
export class UsersModule {}
