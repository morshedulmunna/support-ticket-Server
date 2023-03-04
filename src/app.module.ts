import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { FeedbackModule } from './feedback/feedback.module';
import { SubjectModule } from './subject/subject.module';

@Module({
  imports: [AuthModule, UsersModule, TicketsModule, FeedbackModule, SubjectModule],
  controllers: [AppController],
  providers: [PrismaClient],
})
export class AppModule {}
