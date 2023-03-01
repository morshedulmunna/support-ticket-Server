import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(private prisma: PrismaClient) {}

  // Done | Specific customer can create this tickets
  async createTicket(createTicketDto: CreateTicketDto, id: string) {
    const customer = await this.prisma.user.findUnique({ where: { id } });

    if (customer.roll !== 'customer') {
      throw new Error('Unauthorized User can not create tickets');
    }
    return await this.prisma.ticket.create({
      data: {
        ...createTicketDto,
        userId: id,
      },
    });
  }

  // Admin Get All Customers Tickets Here
  async getAllTicket(id: string) {
    const admin = await this.prisma.user.findUnique({ where: { id } });

    if (admin.roll === 'admin') {
      return this.prisma.ticket.findMany();
    }
  }
  // Admin Get All Customers Tickets Here
  async getSingleUserTicket(userId: string) {
    console.log(userId);
    return this.prisma.ticket.findMany({ where: { userId } });
  }

  // update(id: number, updateTicketDto: UpdateTicketDto) {
  //   return `This action updates a #${id} ticket`;
  // }
}