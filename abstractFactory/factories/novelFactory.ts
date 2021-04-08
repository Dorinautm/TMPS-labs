import { Book } from '../book/book';
import { Novel } from '../book/novel';
import { Genre } from '../genre/genre';
import { Fantasy } from '../genre/fantasy';
import { BookFactory } from '../factories/bookFactory';

export class NovelFactory implements BookFactory{
    public createBook():Book{
        return new Novel();
    }
    public selectGenre():Genre{
        return new Fantasy();
    }
}