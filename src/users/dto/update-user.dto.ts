import { Roll, Prisma } from '@prisma/client';

export class UpdateUserDto implements Prisma.UserUncheckedCreateInput {
  id?: string;
  name?: string;
  email: string;
  password: string;
  roll?: Roll;
  subject?: string;
  ticket?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
  Feedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutUserInput;
}
