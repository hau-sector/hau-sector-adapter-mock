import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  CreateIssueInput,
  IssueObject,
  VoteAnswer,
  VoteObject,
  VoteResultObject,
} from '../../schema';
import { VotesService } from '../services/votes.service';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';
import { VoteResultsService } from '../services/vote-results.service';
import { VoteAnswersService } from '../services/vote-answers.service';

@Resolver('VoteObject')
export class VotesResolver {
  constructor(
    private votesService: VotesService,
    private voteResultsService: VoteResultsService,
    private voteAnswersService: VoteAnswersService,
  ) {}

  @ResolveField()
  async answer(@Parent() vote: VoteObject): Promise<VoteAnswer> {
    return this.voteAnswersService.getAnswer(vote.id);
  }

  @ResolveField()
  async result(@Parent() vote: VoteObject): Promise<VoteResultObject> {
    return this.voteResultsService.getByVoteId(vote.id);
  }

  @UseGuards(Auth0Guard)
  @Query()
  async votes(@Args('buildingId') buildingId: string) {
    return this.votesService.getAll(buildingId);
  }

  @UseGuards(Auth0Guard)
  @Mutation()
  async setAnswer(
    @Args('voteId') voteId: string,
    @Args('answer') answer: VoteAnswer,
  ) {
    return this.voteAnswersService.setAnswer(voteId, answer);
  }
}
