import { Book } from './book';

export class Author {
  id: number;

  // Фамилия(текст, обязательное)
  surname: string;

  // Имя(текст, обязательное)
  name: string;

  // Отчество(текст, не обязательное)
  patronymic: string;

  // Дата рождения(дата, обязательное)
  dateBirth: Date;

  // Список книг
  bookList: Book[];
}
