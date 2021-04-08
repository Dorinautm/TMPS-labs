import { User } from './user';

export abstract class UserFactory{
    
    public abstract Create(): User;
    
    public welcome():string{

        //calling the create method to create the user obj
        const user = this.Create();
        return "Factory method says: " + user.createUser()};
    }