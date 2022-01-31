import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '../schema/category.schema';

import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'category', schema: CategorySchema }])],
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
