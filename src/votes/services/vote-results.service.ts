import { Injectable } from '@nestjs/common';
import {
  CreateIssueInput,
  IssueObject,
  IssueStatus,
  VoteAnswer,
  VoteObject,
  VoteResultObject,
  VoteStatus,
} from '../../schema';
import { faker } from '@faker-js/faker/locale/ru';

@Injectable()
export class VoteResultsService {
  async getByVoteId(voteId: string): Promise<VoteResultObject> {
    return {
      voteId,
      agree: faker.number.int({ max: 20 }),
      disagree: faker.number.int({ max: 20 }),
      avoid: faker.number.int({ max: 20 }),
    };
  }
}
