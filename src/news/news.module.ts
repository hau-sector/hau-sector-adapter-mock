import { Module } from '@nestjs/common';
import { NewsResolver } from './resolvers/news.resolver';
import { NewsService } from './services/news.service';

@Module({
  providers: [NewsResolver, NewsService],
})
export class NewsModule {}
