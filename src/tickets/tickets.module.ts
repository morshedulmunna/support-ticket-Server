import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, PrismaClient],
})
export class TicketsModule {}
