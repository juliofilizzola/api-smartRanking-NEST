import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '../schema/category.schema';

import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PlayerSchema } from 'src/schema/player.schema';
import { PlayersService } from 'src/players/players.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'category', schema: CategorySchema }]),
    PlayersService
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
