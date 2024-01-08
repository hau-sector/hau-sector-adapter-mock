import { Query, Resolver } from '@nestjs/graphql';
import { UserObject } from '../../schema';
import { UsersService } from '../services/users.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';

@Resolver('UserObject')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @UseGuards(Auth0Guard)
  @Query()
  async myUser(@Auth() auth: string): Promise<UserObject> {
    return this.usersService.getById(auth);
  }
}
