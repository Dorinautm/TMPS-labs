import Icomponent from "./Icomponent";

export abstract class EmployeeDecorator implements Icomponent{
    protected _employee:Icomponent;

    constructor(employee){
        this._employee = employee;
    }
    abstract getStatus():string;
    abstract getSalary():number;
}