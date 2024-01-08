import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { NewsModule } from './news/news.module';
import { UsersModule } from './users/users.module';
import { BuildingsModule } from './buildings/buildings.module';
import { IssuesModule } from './issues/issues.module';
import { ChatModule } from './chat/chat.module';
import { MeterDatasModule } from './meter-datas/meter-datas.module';
import { PaymentDatasModule } from './payment-datas/payment-datas.module';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [
    CoreModule,
    SharedModule,
    AuthModule,
    NewsModule,
    UsersModule,
    BuildingsModule,
    IssuesModule,
    ChatModule,
    MeterDatasModule,
    PaymentDatasModule,
    VotesModule,
  ],
})
export class AppModule {}
