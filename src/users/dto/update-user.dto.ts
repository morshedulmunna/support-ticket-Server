import { Prisma, Roll } from 'prisma/generated';

export class UpdateUserDto implements Prisma.UserUncheckedCreateInput {
  categoryID: string;
  id?: string;
  name?: string;
  email: string;
  password: string;
  roll?: Roll;
  subject?: string;
  ticket?: Prisma.TicketUncheckedCreateNestedManyWithoutUserInput;
  Feedback?: Prisma.FeedbackUncheckedCreateNestedManyWithoutUserInput;
}
