import { Injectable } from '@nestjs/common';
import {
  CreateIssueInput,
  IssueObject,
  IssueStatus,
  VoteAnswer,
  VoteObject,
  VoteStatus,
} from '../../schema';
import { faker } from '@faker-js/faker/locale/ru';
import { VotesService } from './votes.service';

@Injectable()
export class VoteAnswersService {
  private answers = new Map<string, VoteAnswer>();

  async getAnswer(voteId: string): Promise<VoteAnswer | undefined> {
    if (this.answers.has(voteId)) return this.answers.get(voteId);
    return faker.helpers.maybe(() => faker.helpers.enumValue(VoteAnswer));
  }

  async setAnswer(
    voteId: string,
    answer: VoteAnswer,
  ): Promise<Omit<VoteObject, 'answer' | 'result'>> {
    this.answers.set(voteId, answer);
    return {
      id: voteId,
      title: 'Установка новых светодиодных фонарей на улицах комплекса',
      content:
        'Утвержден проект установки новых светодиодных фонарей на улицах комплекса. Проголосуйте за места установки и яркость фонарей.',
      status: VoteStatus.COMPLETED,
      publishedAt: '2023-04-15T15:30:00Z',
    };
  }
}
