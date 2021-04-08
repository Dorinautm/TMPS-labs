import iEmployee from "./Icomponent";

export class EmployeeComponent implements iEmployee{
    
    public getStatus(){
        return("I am a employee");
    }
    public getSalary(){
        return 0;
    }
}