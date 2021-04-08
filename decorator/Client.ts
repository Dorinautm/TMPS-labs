import { EmployeeComponent } from "./concreteEmployeeComponent";
import { EmployeeDecorator } from "./EmployeeDecorator";
import Icomponent from "./Icomponent";
import { ManagerDecorator } from "./ManagerDecorator";
import { TLDecorator } from "./TLDecorator";
import { TMDecorator } from "./TMDecorator";

const employee = new EmployeeComponent();

const tmDecorator = new TMDecorator(employee);
const tlDecorator = new TLDecorator(tmDecorator);
const managerDecorator1 = new ManagerDecorator(tmDecorator);
const managerDecorator2 = new ManagerDecorator(tlDecorator);

console.log(employee.getStatus() + ", Salary: " + employee.getSalary());
console.log(tmDecorator.getStatus() + ", Salary: " + tmDecorator.getSalary());
console.log(tlDecorator.getStatus() + ", Salary: " + tlDecorator.getSalary());
console.log(managerDecorator1.getStatus() + ", Salary: " + managerDecorator1.getSalary());
console.log(managerDecorator2.getStatus() + " from a Team Leader, Salary: " + managerDecorator2.getSalary());

