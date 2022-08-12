import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './categories/category.entity';
import { CategoryCreateDTO } from './dto/createCategory.input';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }
  async create(category: CategoryCreateDTO): Promise<Category> {
    let cat = this.categoryRepository.create(category);
    return this.categoryRepository.save(cat);
  }
}
