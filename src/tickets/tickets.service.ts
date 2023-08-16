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

    console.log(createTicketDto);

    return await this.prisma.ticket.create({
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
  }

  // Admin Get All Customers Tickets Here
  async getAllTicket(id: string) {
    const admin = await this.prisma.user.findUnique({ where: { id } });

    if (admin.categoryID === null) {
      const tickets = await this.prisma.ticket.findMany({
        include: {
          category: true,
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
      include: {
        category: true,
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
  // aLL Close tickets
  async getAllTicketsByRoll(userId: string) {
    const assign_type = await this.prisma.user.findFirstOrThrow({
      where: {
        id: userId,
      },
    });

    try {
      const res = await this.prisma.ticket.findMany({
        where: {
          category: {
            categoryID: assign_type.categoryID,
          },
        },
        include: {
          category: true,
        },
      });

      return res;
    } catch (e) {
      return {
        message: 'Not Found',
      };
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
