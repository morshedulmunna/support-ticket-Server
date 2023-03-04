import { Prisma } from '@prisma/client';
export class CreateSubjectDto implements Prisma.SubjectUncheckedCreateInput {
  id?: string;
  types: string;
  userId: string;
  Ticket?: Prisma.TicketUncheckedCreateNestedManyWithoutSubjectInput;
}
