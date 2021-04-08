import { EmployeeDecorator } from "./EmployeeDecorator";

export class TLDecorator extends EmployeeDecorator{
    getStatus(){
        return("I have been decorated as Team Leader")
    }
    getSalary(): number {
        let salary = this._employee.getSalary()+3000;
        return salary;
    }

}