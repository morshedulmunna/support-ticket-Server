import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';

@Injectable()
export class SubjectService {
  constructor(private prisma: PrismaClient) {}

  create(createSubjectDto: CreateSubjectDto) {
    return this.prisma.subject.create({
      data: {
        ...createSubjectDto,
      },
    });
  }

  findAll() {
    return this.prisma.subject.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} subject`;
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
