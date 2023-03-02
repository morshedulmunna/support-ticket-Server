import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';
import { Status } from '@prisma/client';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  tiket_id: string;
  @ApiProperty()
  title?: string;
  updatedDate: string | Date;
  @ApiProperty()
  subject?: string;
  @ApiProperty()
  description?: string;
  status?: Status;
}
