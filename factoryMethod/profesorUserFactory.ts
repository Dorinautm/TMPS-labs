import { UserFactory } from './userFactory';
import { User } from './user';
import { ProfesorUser } from './profesorUser';

export class ProfesorUserFactory extends UserFactory{

    public Create():User{
        return new ProfesorUser();
    }
}