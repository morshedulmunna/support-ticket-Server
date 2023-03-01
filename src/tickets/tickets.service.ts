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

  // Admin Get All Customers Tickets Here
  getAllTicket() {
    return this.prisma.ticket.findMany();
  }

  // Get Tickets by Specific User.
  // async getTicketId(tiket_id: string) {
  //   const foundUser = await this.prisma.ticket.findUnique({
  //     where: { tiket_id },
  //   });

  //   return foundUser;
  // }

  // update(id: number, updateTicketDto: UpdateTicketDto) {
  //   return `This action updates a #${id} ticket`;
  // }
}
