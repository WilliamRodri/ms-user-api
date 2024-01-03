import { Injectable } from '@nestjs/common';
import { UserRepository } from './repositories/users.repository';
import { CreateUserDtos } from './dtos/create-users.dto';
import { UpdateUserDtos } from './dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  create(user: CreateUserDtos) {
    return this.repository.create(user);
  }

  findAll() {
    return this.repository.findAll();
  }

  updateUserById(id: string, data: UpdateUserDtos) {
    return this.repository.updateUserById(id, data);
  }

  deleteUserById(id: string) {
    return this.repository.deleteUserById(id);
  }
}
