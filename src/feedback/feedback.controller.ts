import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { GetCurrentUserById } from 'src/utils';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  createFeedback(
    @Body() { feedback }: any,
    @Param('id') id: string,
    @GetCurrentUserById() UserId: string,
  ) {
    return this.feedbackService.createFeedback(feedback, id, UserId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':ticket_id')
  getFeedbackByTicketId(@Param('ticket_id') ticket_id: string) {
    return this.feedbackService.getFeedbackByTicketId(ticket_id);
  }
}
