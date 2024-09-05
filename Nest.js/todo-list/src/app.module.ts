import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TodoController } from './todo/todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todo/todo.entity';
import { TodoService } from './todo/todo.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todo.db',
      entities: [Todo],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Todo]),
  ],
  controllers: [AppController, TodoController],
  providers: [AppService, TodoService],
})
export class AppModule {}
