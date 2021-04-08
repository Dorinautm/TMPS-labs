import { User } from './user';
import { UserFactory } from './userFactory';
import { StudentUser } from './studentUser';

export class StudentUserFactory extends UserFactory{
    
    public Create():User{    
        
        return new StudentUser();
    }
}