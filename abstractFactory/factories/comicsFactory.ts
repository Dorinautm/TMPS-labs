import { Book } from '../book/book';
import { Comics } from '../book/comics';
import { Genre } from '../genre/genre';
import { Horror } from '../genre/horror';
import { BookFactory } from '../factories/bookFactory';



export class ComicsFactory implements BookFactory{
    public createBook():Book{
        return new Comics();
    }
    public selectGenre():Genre{
        return new Horror();
    }
}