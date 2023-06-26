import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService, PrismaClient],
})
export class FeedbackModule {}
