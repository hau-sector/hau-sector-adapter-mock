import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  CreateMeterDataInput,
  MeterDataObject,
  MeterType,
  UpdateMeterDataInput,
} from '../../schema';
import { MeterDatasService } from '../services/meter-datas.service';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';
import { FlatsService } from '../../buildings/services/flats.service';

@Resolver('MeterDataObject')
export class MeterDatasResolver {
  constructor(
    private meterDatasService: MeterDatasService,
    private flatsService: FlatsService,
  ) {}

  @ResolveField()
  async flat(@Parent() meterData: MeterDataObject) {
    return this.flatsService.getById(meterData.flatId);
  }

  @UseGuards(Auth0Guard)
  @Query()
  async meterDatas(
    @Args('flatId') flatId: string,
    @Args('type') type: MeterType,
    @Args('start') start: string,
    @Args('end') end: string,
  ) {
    return this.meterDatasService.getAll(flatId, type, start, end);
  }

  @UseGuards(Auth0Guard)
  @Query()
  async currentMeterData(
    @Args('flatId') flatId: string,
    @Args('type') type: MeterType,
  ) {
    return this.meterDatasService.getCurrentMeterData(flatId, type);
  }

  @UseGuards(Auth0Guard)
  @Mutation()
  async createCurrentMeterData(
    @Args('flatId') flatId: string,
    @Args('payload') payload: CreateMeterDataInput,
  ) {
    return this.meterDatasService.createCurrentMeterData(flatId, payload);
  }

  @UseGuards(Auth0Guard)
  @Mutation()
  async updateCurrentMeterData(
    @Args('flatId') flatId: string,
    @Args('payload') payload: UpdateMeterDataInput,
  ) {
    return this.meterDatasService.updateCurrentMeterData(flatId, payload);
  }
}
