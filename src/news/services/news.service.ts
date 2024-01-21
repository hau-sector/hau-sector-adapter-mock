import { Injectable } from '@nestjs/common';
import { NewsObject } from '../../schema';
import { faker } from '@faker-js/faker/locale/ru';

@Injectable()
export class NewsService {
  async getAll(buildingId: string): Promise<NewsObject[]> {
    return [
      {
        id: '1',
        title: 'Открытие нового детского игрового комплекса',
        content:
          'Сегодня в нашем жилом комплексе открылся новый детский игровой комплекс. Теперь у наших детей есть уютное место для игр и веселья под присмотром опытных воспитателей.',
        image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-11-06T10:00:00Z',
      },
      {
        id: '2',
        title: 'Организация тематической вечеринки для жителей',
        content:
          'Вчера вечером наш жилой комплекс устроил тематическую вечеринку для всех жителей. Веселые конкурсы, угощения и хорошее настроение ждали каждого гостя.',
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-11-05T15:30:00Z',
      },
      {
        id: '3',
        title: 'Расширение парковочных мест',
        content:
          'Наш жилой комплекс провел работы по расширению парковочных мест. Теперь у наших жителей есть еще больше места для комфортной парковки автомобилей.',
        image: 'https://images.unsplash.com/photo-1616363088386-31c4a8414858?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-11-04T18:45:00Z',
      },
      {
        id: '4',
        title: 'Поломка лифта в доме №5',
        content:
          'Информируем жителей дома №5 о временной поломке лифта. Работы по устранению неполадок уже начались, приносим извинения за временные неудобства.',
        image: 'https://images.unsplash.com/photo-1624342057927-64d60f69b94d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-11-03T12:15:00Z',
      },
      {
        id: '5',
        title: 'Ремонт крыши в доме №2',
        content:
          'Начат капитальный ремонт крыши в доме №2. Работы планируются завершить в течение двух недель. Просим жителей быть бдительными вблизи стройплощадки.',
        image: 'https://images.unsplash.com/photo-1518736346281-76873166a64a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-11-02T09:30:00Z',
      },
      {
        id: '6',
        title: 'Завершение реконструкции парковой зоны',
        content:
          'Парковая зона в нашем комплексе завершила реконструкцию. Теперь у наших жителей есть еще более красивое и ухоженное место для прогулок и отдыха.',
        image: 'https://images.unsplash.com/photo-1588314168741-5698d3502e13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-11-01T14:00:00Z',
      },
      {
        id: '7',
        title: 'Открытие фитнес-зала в клубном доме',
        content:
          'Сегодня открылся новый фитнес-зал в клубном доме. Теперь жители могут заниматься спортом прямо внутри жилого комплекса.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-10-31T11:30:00Z',
      },
      {
        id: '8',
        title: 'Проведение субботника во дворе',
        content:
          'В ближайшую субботу организуется субботник во дворе. Приглашаем всех жителей присоединиться и вместе сделать наш жилой комплекс чище и ухоженнее.',
        image: 'https://images.unsplash.com/photo-1445937888010-cc262f556033?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-10-30T16:45:00Z',
      },
      {
        id: '9',
        title: 'Информация по оплате коммунальных услуг',
        content:
          'Напоминаем жителям о сроках и способах оплаты коммунальных услуг. Дополнительную информацию можно получить в офисе управляющей компании.',
        image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-10-29T13:00:00Z',
      },
      {
        id: '10',
        title: 'Планирование мероприятий на предстоящий месяц',
        content:
          'Ждем ваши предложения по проведению мероприятий на следующий месяц. Пожалуйста, поделитесь своими идеями и пожеланиями в специальной группе.',
        image: 'https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-10-28T09:00:00Z',
      },
      {
        id: '11',
        title: 'Результаты голосования по обновлению детской площадки',
        content:
          'По итогам голосования жители решили обновить детскую площадку. Подробности и план работ будут представлены в ближайшее время.',
        image: 'https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-10-27T14:30:00Z',
      },
      {
        id: '12',
        title: 'Установка новых камер наблюдения',
        content:
          'В целях обеспечения безопасности на территории жилого комплекса начата установка новых камер наблюдения. Просим жителей соблюдать правила безопасности.',
        image: 'https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        publishedAt: '2023-10-26T12:15:00Z',
      },
    ];
  }
}
