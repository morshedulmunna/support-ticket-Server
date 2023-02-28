import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dtio/auth.dto';
import { jwt_secret } from 'src/utils/constant';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient, private jwt: JwtService) {}

  //   Sign up User Service
  async signup(body: AuthDto) {
    const { email, password } = body;

    // Handle Error
    const foundUser = await this.prisma.user.findUnique({ where: { email } });
    if (foundUser) {
      throw new Error('Email Already Exist');
    }

    const hashPassword = await this.hashPassword(password);

    await this.prisma.user.create({
      data: {
        email,
        password: hashPassword,
      },
    });

    return {
      status: 200,
      message: 'Register Succuss',
    };
  }

  //   Sign In User Service
  async signin(body: AuthDto, req: Request, res: Response) {
    const { email, password } = body;

    // When User Not found
    const foundUser = await this.prisma.user.findUnique({ where: { email } });
    if (!foundUser) {
      throw new Error(`This email can't be register`);
    }

    const isMatch = await this.comparePasswords({
      password,
      hash: foundUser.password,
    });
    if (!isMatch) {
      throw new Error(`Wrong Register Person`);
    }

    //signin then return JWT Token
    const token = await this.signToken({
      id: foundUser.id,
      email: foundUser.email,
    });

    // If Token Not Found
    if (!token) {
      throw new ForbiddenException();
    }

    res.cookie('token', token);

    return res.send({
      foundUser,
      token,
    });
  }

  //   Sign Out User Service
  async signout(req: Request, res: Response) {
    res.clearCookie('token');

    return res.send({ message: 'Logout Success' });
  }

  //   Password Hash Function
  async hashPassword(pass: string) {
    const salt = await bcrypt.genSalt();

    const hash = await bcrypt.hash(pass, salt);

    return hash;
  }

  //   Compare Password Function
  async comparePasswords(args: { password: string; hash: string }) {
    return await bcrypt.compare(args.password, args.hash);
  }

  //   Generate Token Function
  async signToken(args: { id: string; email: string }) {
    const payload = args;

    return this.jwt.signAsync(payload, { secret: jwt_secret });
  }
}
