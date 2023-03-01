import { JwtStrategy } from 'src/auth/jwt.strategy';
import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwt_secret } from 'src/utils/constant';

@Module({
  imports: [
    JwtModule.register({
      secret: jwt_secret,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaClient],
})
export class AuthModule {}
