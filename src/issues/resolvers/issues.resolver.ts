import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateIssueInput, IssueObject } from '../../schema';
import { IssuesService } from '../services/issues.service';

@Resolver('IssueObject')
export class IssuesResolver {
  constructor(private issuesService: IssuesService) {}

  @Query()
  async issues(@Args('buildingId') buildingId: string): Promise<IssueObject[]> {
    return this.issuesService.getAll(buildingId);
  }

  @Mutation()
  async createIssue(
    @Args('buildingId') buildingId: string,
    @Args('payload') payload: CreateIssueInput,
  ): Promise<IssueObject> {
    return this.issuesService.createIssue(buildingId, payload);
  }
}
