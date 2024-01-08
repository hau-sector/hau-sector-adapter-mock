import { Module } from '@nestjs/common';
import { ContactsResolver } from './resolvers/contacts.resolver';
import { MessagesService } from './services/messages.service';
import { ContactsService } from './services/contacts.service';
import { MessagesResolver } from './resolvers/messages.resolver';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [UsersModule],
  providers: [
    ContactsResolver,
    ContactsService,
    MessagesResolver,
    MessagesService,
  ],
})
export class ChatModule {}
