import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaClient) {}

  async createFeedback(
    createFeedbackDto: CreateFeedbackDto,
    tiket_id: string,
    userId: string,
  ) {
    return await this.prisma.feedback.create({
      data: {
        ...createFeedbackDto,
        ticket_id: tiket_id,
        userId: userId,
      },
    });
  }
  async getFeedbackByTicketId(ticket_id: string) {
    return await this.prisma.feedback.findMany({
      where: { ticket_id },
    });
  }
}
