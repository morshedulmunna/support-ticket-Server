import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(private prisma: PrismaClient) {}

  create(createFeedbackDto: CreateFeedbackDto, tiket_id: string) {
    return this.prisma.ticket.create({
      data: {
        ...createFeedbackDto,
        tiket_id: tiket_id,
      },
    });
  }

  identify(feedback: string, clientId: string) {
    //TODO
  }

  findAll() {
    return this.prisma.feedback.findMany();
  }
}
