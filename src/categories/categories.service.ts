import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {

  async createCategories(categories) {
    return categories;
  }
}
