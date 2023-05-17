import { Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('findall')
  findAllControll() {
    return this.userService.findAllService();
  }

  @Get(':codigo')
  findByCodigoControll(@Param('codigo') codigo: string) {
    return this.userService.findByCodigoService(codigo);
  }

  @Post(':codigo')
  createControll(@Param('codigo') codigo: string) {
    return this.userService.findByCodigoService(codigo);
  }

}
