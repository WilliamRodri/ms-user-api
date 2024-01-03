import { Injectable } from '@nestjs/common';
import { CreateUserDtos } from '../dtos/create-users.dto';
import { UpdateUserDtos } from '../dtos/update-user.dto';
import { PrismaService } from 'src/modules/global/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: CreateUserDtos) {
    const formartUser = {
      name: user.name,
      email: user.email,
    };

    // this.users.push(formartUser);
    await this.prismaService.users.create({
      data: formartUser,
    });
    return [
      {
        message: 'Usuario criado com sucesso',
        usuario: formartUser,
      },
    ];
  }

  async findAll() {
    return await this.prismaService.users.findMany();
  }

  async updateUserById(id: string, data: UpdateUserDtos) {
    const user = await this.prismaService.users.update({
      where: {
        id,
      },
      data,
    });

    return [
      {
        message: 'Usuario atualizado com sucesso',
        usuario: user,
      },
    ];
  }

  async deleteUserById(id: string) {
    await this.prismaService.users.delete({ where: { id } });
    return [
      {
        message: 'Usuario deletado com sucesso',
      },
    ];
  }
}
