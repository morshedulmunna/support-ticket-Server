import { Prisma, Status } from '@prisma/client';

export class CreateTicketDto implements Prisma.TicketUncheckedCreateInput {
  tiket_id?: string;
  title: string;
  createDate?: string | Date;
  updatedDate?: string | Date;
  subject: string;
  status?: Status;
  description: string;
  userId: string;
  feedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutTicketInput;
}
