import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaClient) {}

  async searchTickets(query: string) {
    const searchResults = await this.prisma.ticket.findMany({
      where: {
        OR: [
          { tiket_id: { contains: query } },
          { title: { contains: query } },
          {
            category: {
              type: { contains: query },
            },
          },
        ],
      },
    });
    return searchResults;
  }
}
