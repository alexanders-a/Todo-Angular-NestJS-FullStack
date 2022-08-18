import {} from '@nestjs/graphql';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Category } from 'src/category/entity/category.entity';
import { TodoCreateDTO } from './dto/create-todo.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
@Resolver(() => Todo)
export class TodoResolver {
  constructor(private todoService: TodoService) {}

  @Query(() => [Todo], { name: 'getAllTodos' })
  findAll() {
    return this.todoService.findAll();
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  createT(@Args('todoInput') todo: TodoCreateDTO) {
    return this.todoService.create(todo);
  }
  @Mutation(() => Todo)
  update(@Args('todoInput') todoInput: UpdateCategoryInput) {
    return this.todoService.updateTodo(todoInput);
  }
  @Query(() => Todo)
  findOne(@Args('id') id: string) {
    return this.todoService.findOne(id);
  }

}
