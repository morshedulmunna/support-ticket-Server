import { ApiProperty } from '@nestjs/swagger';
import { Prisma, Status } from '@prisma/client';

export class CreateTicketDto implements Prisma.TicketUncheckedCreateInput {
  tiket_id?: string;
  @ApiProperty()
  title: string;
  creaateDate?: string | Date;
  updatedDate?: string | Date;
  @ApiProperty()
  subject: string;
  status?: Status;
  @ApiProperty()
  description: string;
  userId: string;
}
