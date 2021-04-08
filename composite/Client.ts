import Angajat from "./angajatComponent";
import Manager from "./managers";
import Department from "./department";

let ITDep : Department = new Department("IT Department"); 
let SalesDep : Department = new Department("Sales Department"); 

let angajat : Angajat = new Angajat("Angajat");
let manager : Manager = new Manager("Manager General");
let pm_manager : Manager = new Manager("PM Manager")

manager.AddAngajat(angajat);
manager.AddAngajat(angajat);
pm_manager.AddAngajat(angajat);

ITDep.AddManager(pm_manager);
ITDep.AddManager(manager);
SalesDep.AddManager(manager);

ITDep.Display();
SalesDep.Display();

