import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/ru';
import { FlatObject } from '../../schema';

@Injectable()
export class FlatsService {
  async getAllByUserId(
    userId: string,
  ): Promise<Omit<FlatObject, 'building'>[]> {
    return Array.from({ length: 3 }, () => ({
      id: faker.database.mongodbObjectId(),
      flat: faker.number.int({ min: 1, max: 100 }),
      buildingId: faker.database.mongodbObjectId(),
    }));
  }
}
