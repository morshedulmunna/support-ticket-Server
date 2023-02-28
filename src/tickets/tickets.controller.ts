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
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createTicketDto: CreateTicketDto, @Req() req) {
    const id = req.user.id;
    return this.ticketsService.create(createTicketDto, id);
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
