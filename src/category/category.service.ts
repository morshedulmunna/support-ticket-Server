import { Injectable, NotAcceptableException } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {
  constructor(private readonly prisma: PrismaClient) {}

  async categoryCreate(createCategoryDto: CreateCategoryDto) {
    const isHave = await this.prisma.category.findUnique({
      where: {
        type: createCategoryDto.type,
      },
    });

    if (isHave) throw new NotAcceptableException('Already Created!!');

    return this.prisma.category.create({
      data: {
        ...createCategoryDto,
      },
    });
  }

  // Geetting All Category List

  async getAllCategory() {
    return this.prisma.category.findMany({});
  }
}
