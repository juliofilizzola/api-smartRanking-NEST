import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { createCategoryDto } from './dtos/createCategory.dtos';
import { categories } from './interfaces/categories.interface';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel('category') private readonly categoryModel: Model<categories>
    ) {}

  async createCategories(categories: createCategoryDto): Promise<categories> {
    const category = new this.categoryModel(categories);
    const result = await category.save();
    return result;
  }
}
