import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): object {
    return { message: 'Health Route working' };
  }
}
