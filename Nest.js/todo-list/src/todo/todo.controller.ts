import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body('title') title: string): Promise<Todo> {
    return this.todoService.create(title);
  }

  @Get()
  getAllTodos(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: number): Promise<void> {
    return this.todoService.remove(id);
  }
}
