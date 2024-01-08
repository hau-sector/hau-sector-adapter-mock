import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateIssueInput, IssueObject } from '../../schema';
import { IssuesService } from '../services/issues.service';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';

@Resolver('IssueObject')
export class IssuesResolver {
  constructor(private issuesService: IssuesService) {}

  @UseGuards(Auth0Guard)
  @Query()
  async issues(@Args('buildingId') buildingId: string): Promise<IssueObject[]> {
    return this.issuesService.getAll(buildingId);
  }

  @UseGuards(Auth0Guard)
  @Mutation()
  async createIssue(
    @Args('buildingId') buildingId: string,
    @Args('payload') payload: CreateIssueInput,
  ): Promise<IssueObject> {
    return this.issuesService.createIssue(buildingId, payload);
  }
}
