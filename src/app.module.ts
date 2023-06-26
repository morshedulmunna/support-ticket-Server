import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { FeedbackModule } from './feedback/feedback.module';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule, UsersModule, TicketsModule, FeedbackModule],
  controllers: [AppController],
  providers: [PrismaClient],
})
export class AppModule {}
