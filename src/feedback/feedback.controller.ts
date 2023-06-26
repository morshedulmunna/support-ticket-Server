import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { GetCurrentUserById } from 'src/utils';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @UseGuards(JwtAuthGuard)
  @Post(':id')
  createFeedback(
    @Body() createFeedbackDto: CreateFeedbackDto,
    @Param('id') id: string,
    @GetCurrentUserById() UserId: string,
  ) {
    return this.feedbackService.createFeedback(createFeedbackDto, id, UserId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':ticket_id')
  getFeedbackByTicketId(@Param('ticket_id') ticket_id: string) {
    return this.feedbackService.getFeedbackByTicketId(ticket_id);
  }
}
