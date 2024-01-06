import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { BuildingObject, FlatObject, NewsObject } from '../../schema';
import { BuildingsService } from '../services/buildings.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { FlatsService } from '../services/flats.service';

@Resolver('FlatObject')
export class FlatsResolver {
  constructor(
    private flatsService: FlatsService,
    private buildingsService: BuildingsService,
  ) {}

  @Query()
  async myFlats(@Auth() auth: string) {
    return this.flatsService.getAllByUserId(auth);
  }

  @ResolveField()
  async building(@Parent() flat: FlatObject): Promise<BuildingObject> {
    return this.buildingsService.getById(flat.buildingId);
  }
}
