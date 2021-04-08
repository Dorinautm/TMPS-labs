import { User } from './user';

export class StudentUser implements User{
    public createUser():string{
        return "the student has been created";
    }
}