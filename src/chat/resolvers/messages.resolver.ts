import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CreateMessageInput, MessageObject } from '../../schema';
import { MessagesService } from '../services/messages.service';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';
import { ContactsService } from '../services/contacts.service';

@Resolver('MessageObject')
export class MessagesResolver {
  constructor(
    private messagesService: MessagesService,
    private contactsService: ContactsService,
  ) {}

  @ResolveField()
  async sender(@Parent() message: MessageObject) {
    return this.contactsService.getById(message.senderId);
  }

  @UseGuards(Auth0Guard)
  @Query()
  async messages(@Args('buildingId') buildingId: string) {
    return this.messagesService.getAll(buildingId);
  }

  @UseGuards(Auth0Guard)
  @Mutation()
  async createMessage(
    @Args('buildingId') buildingId: string,
    @Args('payload') payload: CreateMessageInput,
  ) {
    return this.messagesService.createMessage(buildingId, payload);
  }
}
