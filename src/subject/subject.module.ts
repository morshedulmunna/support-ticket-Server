import { PrismaClient } from '@prisma/client';
import { Module } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';

@Module({
  controllers: [SubjectController],
  providers: [SubjectService, PrismaClient],
})
export class SubjectModule {}
