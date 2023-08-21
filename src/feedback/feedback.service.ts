import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaClient) {}

  async createFeedback(feedback: string, tiket_id: string, userId: string) {
    await this.prisma.feedback.create({
      data: {
        feedback,
        ticket_id: tiket_id,
        userId: userId,
      },
    });

    return {
      message: `Created successfully!`,
    };
  }

  //
  async getFeedbackByTicketId(ticket_id: string) {
    return await this.prisma.feedback.findMany({
      where: { ticket_id },

      select: {
        feedback: true,
        User: true,
      },
    });
  }
}
