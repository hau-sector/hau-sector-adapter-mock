import { Query, Resolver } from '@nestjs/graphql';
import { UserObject } from '../../schema';
import { UsersService } from '../services/users.service';
import { Auth } from '../../auth/decorators/auth.decorator';

@Resolver('UserObject')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query()
  async myUser(@Auth() auth: string): Promise<UserObject> {
    return this.usersService.getById(auth);
  }
}
