import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Request } from 'express';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaClient) {}

  create(createTicketDto: CreateTicketDto, req: Request) {
    return this.prisma.ticket.create({
      data: {
        ...createTicketDto,
      },
    });
  }

  findAll() {
    return this.prisma.ticket.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove() {
    return this.prisma.ticket.deleteMany();
  }
}
