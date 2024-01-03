import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

export const featureModules = [UsersModule, ConfigModule.forRoot()];
