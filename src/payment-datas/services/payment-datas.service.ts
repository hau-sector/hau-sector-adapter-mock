import { Injectable } from '@nestjs/common';
import { PaymentDataObject } from '../../schema';
import { faker } from '@faker-js/faker/locale/ru';
import moment from 'moment';

@Injectable()
export class PaymentDatasService {
  async getAll(
    flatId: string,
    paid?: boolean,
    start?: string,
    end?: string,
  ): Promise<Omit<PaymentDataObject, 'flat'>[]> {
    const length =
      end && start
        ? moment(end).diff(start, 'months')
        : faker.number.int({ max: 10 });

    return Array.from({ length }, (_, i) => ({
      id: faker.database.mongodbObjectId(),
      value: faker.number.int({ min: 500, max: 4000 }),
      ...(paid == null ? { paid: faker.datatype.boolean() } : { paid }),
      paidAt: start
        ? moment(start).add(i, 'months').toISOString()
        : faker.date.recent({ days: 90 }).toISOString(),
      userId: faker.database.mongodbObjectId(),
      flatId,
    }));
  }
}
