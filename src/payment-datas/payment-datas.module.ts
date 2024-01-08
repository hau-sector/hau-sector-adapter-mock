import { Module } from '@nestjs/common';
import { PaymentDatasResolver } from './resolvers/payment-datas.resolver';
import { PaymentDatasService } from './services/payment-datas.service';
import { BuildingsModule } from '../buildings/buildings.module';

@Module({
  imports: [BuildingsModule],
  providers: [PaymentDatasResolver, PaymentDatasService],
})
export class PaymentDatasModule {}
