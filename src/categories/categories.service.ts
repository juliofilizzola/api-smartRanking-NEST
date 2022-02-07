import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { player } from 'src/players/interface/player.interface';
import { PlayersService } from 'src/players/players.service';
import { createCategoryDto } from './dtos/createCategory.dtos';
import { categories, playersEvent } from './interfaces/categories.interface';

@Injectable()
export class CategoriesService {

  constructor(
    @InjectModel('category') private readonly categoryModel: Model<categories>,
    private readonly playerModel: PlayersService
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

  async setAttributePlayer(categories: string, player: Array<string>) {
    
    const category = await this.categoryModel.findById(categories);
    if (!category) {
      throw new NotFoundException("player not exist");
    }
    await this.playerModel.getPlayerById(player[1]);
    await this.playerModel.getPlayerById(player[0]);
    
    category.players.push(player[0], player[1]);
    console.log(category);
    
    await this.categoryModel.findByIdAndUpdate({_id: categories}, {$set: category}).exec();
    return category;
  }
}
