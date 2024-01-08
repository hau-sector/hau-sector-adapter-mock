import { Module } from '@nestjs/common';
import { VotesResolver } from './resolvers/votes.resolver';
import { VotesService } from './services/votes.service';
import { VoteResultsService } from './services/vote-results.service';
import { VoteAnswersService } from './services/vote-answers.service';

@Module({
  providers: [
    VotesResolver,
    VotesService,
    VoteResultsService,
    VoteAnswersService,
  ],
})
export class VotesModule {}
