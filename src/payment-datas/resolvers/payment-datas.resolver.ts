import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { PaymentDataObject } from '../../schema';
import { PaymentDatasService } from '../services/payment-datas.service';
import { UseGuards } from '@nestjs/common';
import { Auth0Guard } from '../../auth/guards/auth0.guard';
import { FlatsService } from '../../buildings/services/flats.service';

@Resolver('PaymentDataObject')
export class PaymentDatasResolver {
  constructor(
    private paymentDatasService: PaymentDatasService,
    private flatsService: FlatsService,
  ) {}

  @ResolveField()
  async flat(@Parent() paymentData: PaymentDataObject) {
    return this.flatsService.getById(paymentData.flatId);
  }

  @UseGuards(Auth0Guard)
  @Query()
  async paymentDatas(
    @Args('flatId') flatId: string,
    @Args('paid', { nullable: true }) paid?: boolean,
    @Args('start', { nullable: true }) start?: string,
    @Args('end', { nullable: true }) end?: string,
  ) {
    return this.paymentDatasService.getAll(flatId, paid, start, end);
  }
}
