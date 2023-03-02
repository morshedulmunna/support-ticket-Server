import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService, PrismaClient],
})
export class FeedbackModule {}
