import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Req,
  UseGuards,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { GetCurrentUserById } from 'src/utils';

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

  // Admin Get All Customers Tickets Here
  @UseGuards(JwtAuthGuard)
  @Get('')
  getAllTicket(@GetCurrentUserById() id: string) {
    return this.ticketsService.getAllTicket(id);
  }
  @UseGuards(JwtAuthGuard)
  @Get('single_user_ticket')
  getSingleUserTicket(@GetCurrentUserById() id: string) {
    return this.ticketsService.getSingleUserTicket(id);
  }
}
