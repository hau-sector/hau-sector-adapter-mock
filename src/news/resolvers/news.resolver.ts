import { Args, Query, Resolver } from '@nestjs/graphql';
import { NewsObject } from '../../schema';
import { NewsService } from '../services/news.service';

@Resolver('NewsObject')
export class NewsResolver {
  constructor(private newsService: NewsService) {}

  @Query()
  async news(@Args('buildingId') buildingId: string): Promise<NewsObject[]> {
    return this.newsService.getAll(buildingId);
  }
}
