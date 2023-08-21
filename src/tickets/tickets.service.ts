import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
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

    console.log(createTicketDto);

    await this.prisma.ticket.create({
      data: {
        title: createTicketDto.title,
        description: createTicketDto.description || '',
        category: {
          connect: {
            categoryID: createTicketDto.categoryID,
          },
        },
        User: {
          connect: {
            id,
          },
        },
      },
    });

    return {
      message: 'success',
    };
  }

  // Admin Get All Customers Open Tickets
  async getOpenTicket(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    switch (user.roll) {
      case 'customer': {
        const tickets = await this.prisma.ticket.findMany({
          where: {
            status: 'open',
            userId: id,
          },
          include: {
            category: true,
          },
        });
        return tickets;
      }
      case 'admin': {
        const tickets = await this.prisma.ticket.findMany({
          where: {
            status: 'open',
          },
          include: {
            category: true,
          },
        });
        return tickets;
      }
      case 'assistance': {
        const tickets = await this.prisma.ticket.findMany({
          where: {
            status: 'open',
            categoryID: user.categoryID,
          },
          include: {
            category: true,
          },
        });
        return tickets;
      }
    }
  }

  async getCloseTicket(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    switch (user.roll) {
      case 'customer': {
        const tickets = await this.prisma.ticket.findMany({
          where: {
            status: 'close',
            userId: id,
          },
          include: {
            category: true,
          },
        });
        return tickets;
      }
      case 'admin': {
        const tickets = await this.prisma.ticket.findMany({
          where: {
            status: 'close',
          },
          include: {
            category: true,
          },
        });
        return tickets;
      }
      case 'assistance': {
        const tickets = await this.prisma.ticket.findMany({
          where: {
            status: 'close',
            categoryID: user.categoryID,
          },
          include: {
            category: true,
          },
        });
        return tickets;
      }
    }
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
  async ticketUpdate(tiket_id: string) {
    return this.prisma.ticket.update({
      where: { tiket_id },
      data: {
        status: 'close',
      },
    });
  }

  // Get ticketUpdate Service
  async ticketRemove(tiket_id: string) {
    console.log(tiket_id);

    return this.prisma.ticket.delete({
      where: { tiket_id },
    });
  }
}
