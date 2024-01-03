import { IsEmail, IsString } from 'class-validator';

export class CreateUserDtos {
  @IsString()
  name: string;

  @IsEmail()
  email: string;
}
