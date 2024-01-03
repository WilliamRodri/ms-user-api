import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDtos } from './dtos/create-users.dto';
import { UpdateUserDtos } from './dtos/update-user.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @ApiResponse({ description: 'Faça o processo de criação do usuario!' })
  @Post('create')
  create(@Body() body: CreateUserDtos) {
    return this.userService.create(body);
  }

  @ApiResponse({ description: 'Faça o processo de pegar os usuario!' })
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @ApiResponse({ description: 'Faça o processo de atualizar os usuario!' })
  @Patch('update/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDtos) {
    return this.userService.updateUserById(id, body);
  }

  @ApiResponse({ description: 'Faça o processo de deletar os usuario!' })
  @Delete('delete/:id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUserById(id);
  }
}
