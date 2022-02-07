import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '../schema/category.schema';

import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PlayerSchema } from 'src/schema/player.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'category', schema: CategorySchema }]),
  MongooseModule.forFeature([{ name: 'players', schema: PlayerSchema }])
  ],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
