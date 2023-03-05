import { PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';
import { Prisma, Status } from '@prisma/client';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
  tiket_id?: string;
  title: string;
  createDate?: string | Date;
  updatedDate?: string | Date;
  status?: Status;
  description: string;
  userId: string;
  feedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutTicketInput;
  subjectId: string;
}
