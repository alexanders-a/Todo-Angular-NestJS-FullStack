import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Category } from './entity/category.entity';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from '../todo/dto/update-category.input';
import { CategoryService } from './category.service';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}

  @Mutation(() => Category)
  createCategory(@Args('category') category: CreateCategoryInput) {
    return this.categoryService.create(category);
  }

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }

  @Query(() => Category, { name: 'category' })
  findOne(@Args('id') id: number) {
    return this.categoryService.findOne(id);
  }

  @Mutation(() => Category)
  removeCategory(@Args('id') id: number) {
    return this.categoryService.remove(id);
  }
}
