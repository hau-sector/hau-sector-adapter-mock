import { Module } from '@nestjs/common';
import { IssuesResolver } from './resolvers/issues.resolver';
import { IssuesService } from './services/issues.service';

@Module({
  providers: [IssuesResolver, IssuesService],
})
export class IssuesModule {}
