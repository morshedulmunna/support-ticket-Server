import { Module } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaClient],
})
export class CategoryModule {}
