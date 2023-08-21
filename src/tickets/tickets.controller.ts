import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { GetCurrentUserById } from 'src/utils';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketsService } from './tickets.service';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  // Done | Specific customer can create this tickets
  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTicketDto: CreateTicketDto,
    @GetCurrentUserById() id: string,
  ) {
    return this.ticketsService.createTicket(createTicketDto, id);
  }

  // getting Open Tickets
  @UseGuards(JwtAuthGuard)
  @Get('open')
  getOpenTicket(@GetCurrentUserById() id: string) {
    return this.ticketsService.getOpenTicket(id);
  }

  // getting Close Tickets
  @UseGuards(JwtAuthGuard)
  @Get('close')
  getCloseTicket(@GetCurrentUserById() id: string) {
    return this.ticketsService.getCloseTicket(id);
  }

  // Get Single Tickets by Id
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getSingleTicketDetails(@Param('id') id: string) {
    return this.ticketsService.getSingleTicketDetails(id);
  }

  // Update TIckets by Id
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  ticketUpdate(@Param('id') id: string) {
    return this.ticketsService.ticketUpdate(id);
  }

  // Delete Ticket by ID
  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  ticketRemove(@Param('id') id: string) {
    return this.ticketsService.ticketRemove(id);
  }
}
