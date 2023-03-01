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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(
    @Body() createTicketDto: CreateTicketDto,
    @GetCurrentUserById() id: string,
  ) {
    return this.ticketsService.createTicket(createTicketDto, id);
  }

  // @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  // @UseGuards(JwtAuthGuard)
  @Get('open')
  findOpenTickets() {
    return this.ticketsService.findOpenTickets();
  }

  // @UseGuards(JwtAuthGuard)
  @Get('close')
  findCloseTickets() {
    return this.ticketsService.findCloseTickets();
  }

  // @UseGuards(JwtAuthGuard)
  @Get(':id')
  findSingleTickets(@Param('id') id: string) {
    return this.ticketsService.findSingleTickets(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTicketDto: UpdateTicketDto) {
  //   return this.ticketsService.update(+id, updateTicketDto);
  // }
}
