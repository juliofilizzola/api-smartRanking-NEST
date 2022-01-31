import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { createCategoryDto } from './dtos/createCategory.dtos';
import { categories } from './interfaces/categories.interface';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesServices: CategoriesService) {}

  @Post("/Categories")
  @UsePipes(ValidationPipe)
  async createCategory(@Body() category: createCategoryDto): Promise<categories> {
    const result = await this.categoriesServices.createCategories(category);
    return result;
  }

}
