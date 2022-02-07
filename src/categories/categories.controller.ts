import { Body, Controller, Get, NotFoundException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { createCategoryDto } from './dtos/createCategory.dtos';
import { categories, playersEvent } from './interfaces/categories.interface';

@Controller('api/v1/categories')
export class CategoriesController {
  constructor(private readonly categoriesServices: CategoriesService) {}

  @Post("/Categories")
  @UsePipes(ValidationPipe)
  async createCategory(@Body() category: createCategoryDto): Promise<categories> {
    const result = await this.categoriesServices.createCategories(category);
    return result;
  }


  @Get("/AllCategories")
  async getCategories(): Promise<categories[]> {
    const result = await this.categoriesServices.getCategories();
    if (!result) {
      throw new NotFoundException("Ainda não tem nenhuma categoria registrada.");
    }
    return result;
  }

  @Get("/categoriesID/:id")
  async getCategoriesById(@Param('id') id: string): Promise<categories> {
    const result = await this.categoriesServices.getCategoriesById(id);
    if (!result) {
      throw new NotFoundException("Não existe essa categoria ainda.");
    }
    return result;
  }

  @Get("/name/:name")
  async getCategoriesByName(@Param('name') name: string): Promise<categories> {
    const result = await this.categoriesServices.getCategoriesByName(name);
    if (!result) {
      throw new NotFoundException("Não existe essa categoria ainda.");
    }
    return result;
  }

  @Post('/:categories/player')
  @UsePipes(ValidationPipe)
  async setAttributePlayer(
    @Param('categories') categories: string,
    @Body() player: playersEvent
  ): Promise<any> {
    const { players } = player;
    const result = await this.categoriesServices.setAttributePlayer(categories, players);
    return result;
  }
}
