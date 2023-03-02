import { Prisma } from '@prisma/client';

export class CreateFeedbackDto implements Prisma.FeedbackUncheckedCreateInput {
  feedback_Id?: string;
  feedback: string;
  submitDate?: string | Date;
  ticketTiket_id: string;
}
