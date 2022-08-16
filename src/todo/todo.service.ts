import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category/entity/category.entity';
import { CategoryService } from 'src/category/category.service';
import { Repository } from 'typeorm';
import { Todo } from './entity/todo.entity';
import { TodoCreateDTO } from './dto/create-todo.input';
import { UpdateCategoryInput } from './dto/update-category.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
    private projectService: CategoryService,
  ) {}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }
  async findOne(id: any) {
    return this.todoRepository.findOne(id);
  }

  async create(todo: TodoCreateDTO): Promise<Todo> {
    const todos = this.todoRepository.create(todo);
    return this.todoRepository.save(todos);
  }

  async updateTodo(todoInput: UpdateCategoryInput): Promise<Todo> {
    return this.todoRepository.save(todoInput);
  }

  async getCategory(id: number): Promise<Category> {
    return this.projectService.findOne(id);
  }
}
