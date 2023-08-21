import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { FeedbackModule } from './feedback/feedback.module';
import { TicketsModule } from './tickets/tickets.module';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { SearchModule } from './search/search.module';

@Module({
  imports: [AuthModule, UsersModule, TicketsModule, FeedbackModule, CategoryModule, SearchModule],
  controllers: [AppController],
  providers: [PrismaClient],
})
export class AppModule {}
