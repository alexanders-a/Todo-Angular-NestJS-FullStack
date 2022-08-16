import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryInput } from './dto/create-category.input';
import { Category } from './entity/category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  create(category: CreateCategoryInput): Promise<Category> {
    const cate = this.categoryRepository.create(category);
    return this.categoryRepository.save(cate);
  }

  async findAll(): Promise<Category[]> {
    return this.categoryRepository.find({ relations: ['todos']});
  }

  async findOne(id: any): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }

  async remove(id: number) {
    let cate = this.findOne(id);
    if (cate) {
      let ret = await this.categoryRepository.delete(id);
      if (ret.affected === 1) {
        return cate;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }
}
