import { Book } from './book';

export class Comics implements Book{
    public giveName():string{
        return "The first Comics is created";
    }
}