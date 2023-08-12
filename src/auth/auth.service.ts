import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import { PrismaClient } from 'prisma/generated';
import { jwt_secret } from 'src/utils/constant';
import { AuthDto } from './dtio/auth.dto';
import { LoginAuthDto } from './dtio/loginAuth.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient, private jwt: JwtService) {}

  //   Sign up User Service
  async signup(body: AuthDto) {
    const { email, password, name } = body;

    // Handle Error
    const foundUser = await this.prisma.user.findUnique({ where: { email } });
    if (foundUser) {
      throw new UnauthorizedException('Email Already Exist');
    }

    const hashPassword = await this.hashPassword(password);

    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });
  }

  //   Sign In User Service
  async signin(body: LoginAuthDto) {
    const { email, password } = body;

    // When User Not found
    const foundUser = await this.prisma.user.findUnique({ where: { email } });

    if (!foundUser) {
      throw new UnauthorizedException('user does not register');
    }
    // Password Error Handling
    const isMatch = await this.comparePasswords({
      password,
      hash: foundUser.password,
    });
    if (!isMatch) {
      throw new UnauthorizedException('password incorrect');
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
    return {
      accessToken: token,
      user: {
        name: foundUser.name,
        email: foundUser.email,
        category: foundUser.categoryID,
        roll: foundUser.roll,
      },
    };
  }

  //   Sign Out User Service
  async signout(req: Request, res: Response) {
    res.clearCookie('token');
    return res.send({ message: 'Logout Success' });
  }

  /**
   *
   *Custom Function
   */
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
