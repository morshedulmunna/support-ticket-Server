import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackGateway } from './feedback.gateway';

@Module({
  providers: [FeedbackGateway, FeedbackService],
})
export class FeedbackModule {}
