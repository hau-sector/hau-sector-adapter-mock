import { Args, Query, Resolver } from '@nestjs/graphql';
import { NewsObject } from '../../schema';
import { NewsService } from '../services/news.service';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';

@Resolver('NewsObject')
export class NewsResolver {
  constructor(private newsService: NewsService) {}

  @UseGuards(Auth0Guard)
  @Query()
  async news(@Args('buildingId') buildingId: string): Promise<NewsObject[]> {
    return this.newsService.getAll(buildingId);
  }
}
