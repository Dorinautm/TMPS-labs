import { Book } from '../book/book';
import { Genre } from '../genre/genre';

export interface BookFactory{
    createBook():Book;
    selectGenre():Genre;

}