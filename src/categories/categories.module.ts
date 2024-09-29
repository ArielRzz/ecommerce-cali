import { Module } from '@nestjs/common';
import { CategoriesService } from '../categories.service';
import { CategoriesController } from '../controllers/categories.controller';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController]
})
export class CategoriesModule {}
