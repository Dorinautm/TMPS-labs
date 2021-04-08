import { EmployeeDecorator } from "./EmployeeDecorator";

export class TMDecorator extends EmployeeDecorator{
    getStatus(){
        return("I have been decorated as Team Member")
    }
    getSalary(): number {
        let salary = this._employee.getSalary()+10000;
        return salary;
    }

}