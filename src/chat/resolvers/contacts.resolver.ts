import { Args, Query, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';
import { ContactsService } from '../services/contacts.service';

@Resolver('ContactObject')
export class ContactsResolver {
  constructor(private contactsService: ContactsService) {}

  @UseGuards(Auth0Guard)
  @Query()
  async contacts(@Args('buildingId') buildingId: string) {
    return this.contactsService.getAll(buildingId);
  }
}
