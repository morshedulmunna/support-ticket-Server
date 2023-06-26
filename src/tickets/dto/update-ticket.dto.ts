import { PartialType } from '@nestjs/swagger';
import { Prisma, Status } from 'prisma/generated';
import { CreateTicketDto } from './create-ticket.dto';

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
