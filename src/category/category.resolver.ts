import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Category } from './categories/category.entity';
import { CategoryService } from './category.service';
import { CategoryCreateDTO } from './dto/createCategory.input';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private categoryService: CategoryService) {}

  @Query(() => [Category], { name: 'categories' })
  findAll() {
    return this.categoryService.findAll();
  }
  @Mutation(() => Category, { name: 'createCategory' })
  create(@Args('categoryInput') category: CategoryCreateDTO) {
    return this.categoryService.create(category);
  }
}
