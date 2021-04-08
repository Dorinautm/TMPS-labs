import { EmployeeDecorator } from "./EmployeeDecorator";

export class ManagerDecorator extends EmployeeDecorator{
    getStatus(){
        return("I have been decorated as Manager")
    }
    getSalary(): number {
        let salary = this._employee.getSalary()+6000;
        return salary;
    }

}