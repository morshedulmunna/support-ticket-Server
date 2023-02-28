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

  findOpenTickets() {
    return this.prisma.ticket.findMany({ where: { status: 'open' } });
  }

  findCloseTickets() {
    return this.prisma.ticket.findMany({ where: { status: 'close' } });
  }

  async findSingleTickets(tiket_id: string) {
    const foundUser = await this.prisma.ticket.findUnique({
      where: { tiket_id },
    });

    return foundUser;
  }

  // update(id: number, updateTicketDto: UpdateTicketDto) {
  //   return `This action updates a #${id} ticket`;
  // }
}
