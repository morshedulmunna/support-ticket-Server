import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaClient) {}

  async create(createTicketDto: CreateTicketDto, id: string) {
    await this.prisma.ticket.create({
      data: {
        ...createTicketDto,
        userId: id,
      },
    });

    return {
      message: 'Ticket Create Successfully',
    };
  }

  findAll() {
    return this.prisma.ticket.findMany();
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }
}
