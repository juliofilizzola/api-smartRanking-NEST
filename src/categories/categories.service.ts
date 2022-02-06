import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { player } from 'src/players/interface/player.interface';
import { createCategoryDto } from './dtos/createCategory.dtos';
import { categories } from './interfaces/categories.interface';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel('category') private readonly categoryModel: Model<categories>,
    @InjectModel('players') private readonly playerModel: Model<player>
    ) {}

  async createCategories(categories: createCategoryDto): Promise<categories> {
    const category = new this.categoryModel(categories);
    const result = await category.save();
    return result;
  }

  async getCategories(): Promise<categories[]> {
    const categories = await this.categoryModel.find();
    return categories;
  }

  async getCategoriesById(id: string): Promise<categories> {
    const category = await this.categoryModel.findById(id);
    if (!category) {
      throw new NotFoundException("Categoria não existe");
    }
    return category;
  }

  async setAttributePlayer(categories: string, player: string) {
    const getPlayer = await this.playerModel.findOne({ name: player });
    if (!getPlayer) {
      throw new NotFoundException("player not exist");
    }
    return getPlayer;
  }
}
