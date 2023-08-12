import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async categoryCreate(createCategoryDto: CreateCategoryDto) {
    const { type, assign_to } = createCategoryDto;
    return this.prisma.category.create({
      data: {
        type,
        assign_to: {
          connect: {
            id: assign_to,
          },
        },
      },
    });
  }
}
