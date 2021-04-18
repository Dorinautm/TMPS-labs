interface iGrupa{
  totalStudents():number;
  registerStudent(name:string):void;
}

class Grupa implements iGrupa{
  
  private _listOfStudents: string[];
  
  constructor(listOfStudents){
      this._listOfStudents = listOfStudents;}

  totalStudents() {
    console.log("person nr: " + (this._listOfStudents.length+1));
    return this._listOfStudents.length+1;

  }
  registerStudent(name: string){
    this._listOfStudents.push(name);
    console.log("person name: " + name);
  }

}

class ProxyGrupa implements iGrupa{

  private _grupa:iGrupa;
  private students_allowed = 10;

    constructor(grupa:iGrupa){
        this._grupa = grupa;
    }

  totalStudents(){
    return this._grupa.totalStudents();
  }
  registerStudent(name: string) {
    if(this.students_allowed >= this.totalStudents()){
      this._grupa.registerStudent(name);
    }else{
      console.log("this course has "+this.students_allowed + " students");
      console.log("Grupa is full, no more students allowed");
    }
  }
  
}

let list:string[] = [];
const grupa_curs = new Grupa(list);
const grupa_proxy = new ProxyGrupa(grupa_curs);

grupa_proxy.registerStudent("first");
grupa_proxy.registerStudent("second");
grupa_proxy.registerStudent("third");
grupa_proxy.registerStudent("jon");
grupa_proxy.registerStudent("may");
grupa_proxy.registerStudent("mia");
grupa_proxy.registerStudent("april");
grupa_proxy.registerStudent("phoebe");
grupa_proxy.registerStudent("stark");
grupa_proxy.registerStudent("amelia");
grupa_proxy.registerStudent("robert");