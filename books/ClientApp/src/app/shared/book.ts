import { Author } from './author';

export class Book {
  id: number;

  // Название(текст, обязательное)
  title: string;

  // Количество страниц(число, обязательное)
  numberPages: number;

  // Жанр(текст, обязательное из списка допустимых значений)
  genre: string[];

  // список авторов
  authors: Author[];
}
