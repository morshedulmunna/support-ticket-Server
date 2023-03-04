import { Prisma } from '@prisma/client';

export class SubjectDto implements Prisma.SubjectUncheckedCreateInput {
  id?: string;
  types: string;
  userId: string;
  ticket?: Prisma.TicketUncheckedCreateNestedManyWithoutSubjectInput;
}
