import { Book } from './book';


export class Novel implements Book{
    public giveName():string{
        return "The first novel is created";
    }
}