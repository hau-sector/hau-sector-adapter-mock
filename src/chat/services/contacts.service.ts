import { Injectable } from '@nestjs/common';
import { UserObject } from '../../schema';
import { UsersService } from '../../users/services/users.service';

@Injectable()
export class ContactsService {
  constructor(private usersService: UsersService) {}

  async getAll(buildingId: string): Promise<UserObject[]> {
    return this.usersService.getAll(buildingId);
  }

  async getById(contactId: string): Promise<UserObject> {
    return this.usersService.getById(contactId);
  }
}
