import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';

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

    if (admin.subject === null) {
      const tickets = await this.prisma.ticket.findMany();
      if (admin.roll === 'admin') {
        return tickets;
      }
    } else {
      const tickets = await this.prisma.ticket.findMany({
        where: {
          subject: admin.subject,
        },
      });
      if (admin.roll === 'admin') {
        return tickets;
      }
    }
  }

  async getSingleUserTicket(userId: string) {
    return this.prisma.ticket.findMany({
      where: { userId },
    });
  }

  // aLL open tickets
  async getSingleUserOpenTicket(userId: string) {
    return this.prisma.ticket.findMany({
      where: {
        AND: {
          status: 'open',
          userId,
        },
      },
    });
  }
  // aLL Close tickets
  async getSingleUserCloseTicket(userId: string) {
    return this.prisma.ticket.findMany({
      where: {
        AND: {
          status: 'close',
          userId,
        },
      },
    });
  }

  // Get Single Ticket Details
  async getSingleTicketDetails(tiket_id: string) {
    const singleTicket = await this.prisma.ticket.findUnique({
      where: { tiket_id },
      include: {
        feedback: true,
      },
    });

    return singleTicket;
  }

  // Get ticketUpdate Service
  async ticketUpdate(tiket_id: string, updateArticleDto: UpdateTicketDto) {
    return this.prisma.ticket.update({
      where: { tiket_id },
      data: updateArticleDto,
    });
  }

  // Get ticketUpdate Service
  async ticketRemove(tiket_id: string) {
    return this.prisma.ticket.delete({
      where: { tiket_id },
    });
  }
}
