interface Imediator{
    registerUser(user:User);
    registerCurs(curs:Curs);
}

class Else implements Imediator{

    registerUser(user:User){
        console.log(user._userName + " was registered on Else")
    }
    registerCurs(curs:Curs){
        console.log(curs._cursName + " curs was added on Else")
    }
}

interface Components{
    register();
}

class User implements Components{

    _userName:string;
    _mediator:Else;

    constructor(userName:string, mediator:Else ){
        this._userName = userName;
        this._mediator = mediator;
    }

    register(){
        this._mediator.registerUser(this);
    }
    enroll(curs:Curs):void{
        console.log(this._userName + " applied to enroll in " + curs._cursName);
    }
}

class Curs implements Components{

    _cursName:string;
    _mediator:Else;

    constructor(cursName:string, mediator:Else ){
        this._cursName = cursName;
        this._mediator = mediator;
    }

    register(){
        this._mediator.registerCurs(this);
    }
    acceptEnroll(user:User):void{
        console.log("the user "+ user._userName + " has been accepted");
    }
}

const mediator = new Else();
const user1 = new User("jon", mediator);
user1.register();
const curs1 = new Curs("Rockets", mediator);
curs1.register();
const user2 = new User("emma", mediator);
user2.register();
//const curs2 = new Curs("Rockets", mediator);

user1.enroll(curs1);
user2.enroll(curs1);
curs1.acceptEnroll(user1);
curs1.acceptEnroll(user2);
