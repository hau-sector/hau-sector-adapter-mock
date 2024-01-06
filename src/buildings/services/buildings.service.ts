import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker/locale/ru';
import { BuildingObject } from '../../schema';

@Injectable()
export class BuildingsService {
  async getById(buildingId: string): Promise<BuildingObject> {
    return {
      id: buildingId,
      street: faker.location.streetName(),
      house: faker.number.int({ min: 1, max: 100 }).toString(),
    };
  }
}
