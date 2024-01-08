import { Injectable } from '@nestjs/common';
import { CreateMessageInput, MessageObject } from '../../schema';
import { faker } from '@faker-js/faker/locale/ru';

@Injectable()
export class MessagesService {
  async getAll(buildingId: string): Promise<Omit<MessageObject, 'sender'>[]> {
    return [
      {
        id: '1',
        text: 'Привет, как дела?',
      },
      {
        id: '2',
        text: 'Привет! Все отлично, спасибо!',
      },
      {
        id: '3',
        text: 'Когда будет собрание жильцов?',
      },
      {
        id: '4',
        text: 'Пока не назначено. Обсудим на следующей неделе.',
      },
      {
        id: '5',
        text: 'Привет, есть ли у кого-нибудь молоко?',
      },
      {
        id: '6',
        text: 'Да, у меня есть. Заходите вечером.',
      },
      {
        id: '7',
        text: 'Кто сегодня дежурит по подъезду?',
      },
      {
        id: '8',
        text: 'Это моя неделя. Если что-то случится, звоните мне.',
      },
      {
        id: '9',
        text: 'Где можно приобрести ключ от спортзала?',
      },
      {
        id: '10',
        text: 'Ключ можно получить у меня. Зайдите вечером.',
      },
      {
        id: '11',
        text: 'Всем привет! Кто хочет поиграть в настольные игры в выходные?',
      },
      {
        id: '12',
        text: 'Я в игре! Какие у нас варианты?',
      },
      {
        id: '13',
        text: 'Я предлагаю играть в Монополию. У кого есть это игра?',
      },
      {
        id: '14',
        text: 'У меня есть. Могу принести в выходные.',
      },
      {
        id: '15',
        text: 'Привет! Как прошел ремонт у в квартире на 3 этаже?',
      },
      {
        id: '16',
        text: 'Ремонт закончен! Все довольны результатом.',
      },
      {
        id: '17',
        text: 'Подскажите, где можно заказать вкусные суши?',
      },
      {
        id: '18',
        text: 'Я заказываю суши в ресторане "Сакура". Всем рекомендую!',
      },
      {
        id: '19',
        text: 'У кого-то есть детский велосипед? Мой сын хочет покататься.',
      },
      {
        id: '20',
        text: 'У меня есть. Могу дать на прокат. Приходите вечером.',
      },
    ].map((item) => ({
      ...item,
      mine: faker.datatype.boolean({ probability: 0.2 }),
      time: faker.date.recent({ days: 30 }).toISOString(),
      senderId: faker.database.mongodbObjectId(),
    }));
  }

  async createMessage(
    buildingId: string,
    payload: CreateMessageInput,
  ): Promise<Omit<MessageObject, 'sender'>> {
    return {
      ...payload,
      id: faker.database.mongodbObjectId(),
      mine: true,
      time: new Date().toISOString(),
      senderId: faker.database.mongodbObjectId(),
    };
  }
}
