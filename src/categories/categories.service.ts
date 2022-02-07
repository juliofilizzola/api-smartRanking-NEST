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
    const category = await this.categoryModel.findById(id).populate("players");
    if (!category) {
      throw new NotFoundException("Categoria não existe");
    }
    return category;
  }

  async getCategoriesByName(name: string): Promise<categories> {
    const category = await this.categoryModel.findOne({ category: name }).populate("players");
    if (!category) {
      throw new NotFoundException("Categoria não existe");
    }
    return category;
  }

  async setAttributePlayer(categories: string, player: any) {
    
    const categoryChange = await this.categoryModel.findOne({ category: categories });
    
    if (!categoryChange) {
      throw new NotFoundException("player not exist");
    }
    
    if(categoryChange.players.length === 2) {
      throw new NotFoundException("Categoria já possui jogadores para o jogo");
    }
  
    await this.playerModel.getPlayerById(player[1]);
    await this.playerModel.getPlayerById(player[0]);
    
    categoryChange.players.push(player[0], player[1]);
    
    await this.categoryModel.findOneAndUpdate({category: categories}, {$set: categoryChange}).exec();
    return categoryChange;
  }
}
