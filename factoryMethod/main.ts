import { UserFactory } from './userFactory';
import { StudentUserFactory } from './studentUserFactory';
import { ProfesorUserFactory } from './profesorUserFactory';


function Client(creator:UserFactory){
    console.log("welcome to the user factory!")
    console.log(creator.welcome());
}


console.log('Lets create a Student User!')
Client(new StudentUserFactory());

console.log('Lets create a Professor User!')
Client(new ProfesorUserFactory());