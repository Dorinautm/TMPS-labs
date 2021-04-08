import { User } from './user';

export class ProfesorUser implements User{
    public createUser():string{
        return "the professor user has been created";
    }
}