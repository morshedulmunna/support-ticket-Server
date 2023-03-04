import { Prisma } from '@prisma/client';

export class SubjectDto implements Prisma.SubjectUncheckedCreateInput {
  id?: string;
  types: string;
  Ticket?: Prisma.TicketUncheckedCreateNestedManyWithoutSubjectInput;
  tiket_id?: string;
  User?: Prisma.UserUncheckedCreateNestedManyWithoutSubjectInput;
}
