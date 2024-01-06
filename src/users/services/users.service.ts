import { Injectable } from '@nestjs/common';
import { UserObject } from '../../schema';
import { faker } from '@faker-js/faker/locale/ru';

@Injectable()
export class UsersService {
  async getById(userId: string): Promise<UserObject> {
    const sex = faker.person.sexType();
    return {
      id: faker.database.mongodbObjectId(),
      firstName: faker.person.firstName(sex),
      lastName: faker.person.lastName(sex),
      middleName: faker.person.middleName(sex),
      avatar: faker.image.avatar(),
    };
  }
}
