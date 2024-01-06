import { Module } from '@nestjs/common';
import { FlatsResolver } from './resolvers/flats.resolver';
import { BuildingsService } from './services/buildings.service';
import { FlatsService } from './services/flats.service';

@Module({
  providers: [FlatsResolver, BuildingsService, FlatsService],
})
export class BuildingsModule {}
