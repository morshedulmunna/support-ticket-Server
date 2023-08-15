import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  categoryCreate(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.categoryCreate(createCategoryDto);
  }

  @Get()
  getAllCategory() {
    return this.categoryService.getAllCategory();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoryService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
  //   return this.categoryService.update(+id, updateCategoryDto);
  // }

  @Delete(':id')
  categoryDeleteByID(@Param('id') id: string) {
    return this.categoryService.categoryDeleteByID(id);
  }
}
