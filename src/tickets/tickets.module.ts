import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsController } from './tickets.controller';

@Module({
  controllers: [TicketsController],
  providers: [TicketsService, PrismaClient],
})
export class TicketsModule {}
