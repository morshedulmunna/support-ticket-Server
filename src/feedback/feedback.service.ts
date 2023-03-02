import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaClient) {}

  async createFeedback(createFeedbackDto: CreateFeedbackDto, tiket_id: string) {
    return await this.prisma.feedback.create({
      data: {
        ...createFeedbackDto,
        ticketTiket_id: tiket_id,
      },
    });
  }
  async getFeedbackByTicketId(ticketTiket_id: string) {
    return await this.prisma.feedback.findMany({
      where: { ticketTiket_id },
    });
  }
}
