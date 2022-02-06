import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { player } from 'src/players/interface/player.interface';
import { createCategoryDto } from './dtos/createCategory.dtos';
import { categories, playersEvent } from './interfaces/categories.interface';

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
    const categories = await this.categoryModel.find().populate("players");
    return categories;
  }

  async getCategoriesById(id: string): Promise<categories> {
    const category = await this.categoryModel.findById(id);
    if (!category) {
      throw new NotFoundException("Categoria não existe");
    }
    return category;
  }

  async setAttributePlayer(categories: string, player: Array<String>) {
    const getPlayer1 = await this.playerModel.findById(player[0]);
    const getPlayer2 = await this.playerModel.findById(player[1]);
    if (!getPlayer1 || !getPlayer2) {
      const result = getPlayer1 ? "Player 2" : "Player 1";
      throw new NotFoundException(`${result} not exist`);
    }
    const category = await this.categoryModel.findById(categories);
    if (!category) {
      throw new NotFoundException("player not exist");
    }

    category.players.push(getPlayer1, getPlayer2);
    console.log(category);
    
    await this.categoryModel.findByIdAndUpdate({_id: categories}, {$set: category}).exec();
    return category;
  }
}
