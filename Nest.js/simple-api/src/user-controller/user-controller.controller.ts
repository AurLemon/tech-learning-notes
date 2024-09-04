import { Controller, Param, Get } from '@nestjs/common';

@Controller('user-controller')
export class UserController {
  @Get('hello/:name')
  sayHello(@Param('name') name: string): string {
    return `Hello, ${name}!`;
  }
}
