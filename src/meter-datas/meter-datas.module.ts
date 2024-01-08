import { Module } from '@nestjs/common';
import { MeterDatasResolver } from './resolvers/meter-datas.resolver';
import { MeterDatasService } from './services/meter-datas.service';
import { BuildingsModule } from '../buildings/buildings.module';

@Module({
  imports: [BuildingsModule],
  providers: [MeterDatasResolver, MeterDatasService],
})
export class MeterDatasModule {}
