import { Injectable } from '@nestjs/common';
import {
  CreateIssueInput,
  CreateMeterDataInput,
  IssueObject,
  IssueStatus,
  MeterDataObject,
  MeterType,
  UpdateMeterDataInput,
} from '../../schema';
import { faker } from '@faker-js/faker/locale/ru';
import moment from 'moment';

@Injectable()
export class MeterDatasService {
  async getAll(
    flatId: string,
    type: MeterType,
    start: string,
    end: string,
  ): Promise<Omit<MeterDataObject, 'flat'>[]> {
    return Array.from(
      { length: moment(end).diff(start, 'months') },
      (_, i) => ({
        id: faker.database.mongodbObjectId(),
        value:
          10_000 + i * 220 + faker.number.float({ max: 100, precision: 0.001 }),
        accepted: true,
        enteredAt: moment(start).add(i, 'months').toISOString(),
        acceptedAt: moment(start).add(i, 'months').toISOString(),
        updatedAt: faker.helpers.maybe(() => new Date().toISOString()),
        userId: faker.database.mongodbObjectId(),
        type,
        flatId,
      }),
    );
  }

  async getCurrentMeterData(
    flatId: string,
    type: MeterType,
  ): Promise<Omit<MeterDataObject, 'flat'> | undefined> {
    return type === MeterType.GAS
      ? {
          id: faker.database.mongodbObjectId(),
          value: 10_000 + faker.number.float({ max: 1000, precision: 0.001 }),
          accepted: true,
          enteredAt: new Date().toISOString(),
          acceptedAt: new Date().toISOString(),
          updatedAt: faker.helpers.maybe(() => new Date().toISOString()),
          userId: faker.database.mongodbObjectId(),
          type,
          flatId,
        }
      : undefined;
  }

  async createCurrentMeterData(
    flatId: string,
    payload: CreateMeterDataInput,
  ): Promise<Omit<MeterDataObject, 'flat'>> {
    return {
      ...payload,
      id: faker.database.mongodbObjectId(),
      accepted: true,
      enteredAt: new Date().toISOString(),
      acceptedAt: new Date().toISOString(),
      userId: faker.database.mongodbObjectId(),
      flatId,
    };
  }

  async updateCurrentMeterData(
    flatId: string,
    payload: UpdateMeterDataInput,
  ): Promise<Omit<MeterDataObject, 'flat'>> {
    return {
      ...payload,
      id: faker.database.mongodbObjectId(),
      accepted: true,
      enteredAt: new Date().toISOString(),
      acceptedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: faker.database.mongodbObjectId(),
      flatId,
    };
  }
}
