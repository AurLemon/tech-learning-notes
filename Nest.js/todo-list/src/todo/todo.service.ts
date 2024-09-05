import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async create(title: string): Promise<Todo> {
    const newTodo = this.todoRepository.create({ title, completed: false });
    return this.todoRepository.save(newTodo);
  }

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async remove(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
