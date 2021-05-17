interface Memento {
    getSalary(): number;
    getPosition(): string;
  }
  
  class Employee {
    private id: number;
    public name: string;
    public salary: number;
    public position: string;
    constructor(id: number, name: string, salary: number, position: string) {
      this.id = id;
      this.name = name;
      this.salary = salary;
      this.position = position;
    }
  }
  class Originator {
    private employee: Employee;
  
    constructor(employee: Employee) {
      this.employee = employee;
      console.log(`${this.employee.name} was hired.`);
      console.log(
        `${this.employee.name} is working as a ${this.employee.position} with a salary of ${this.employee.salary}`
      );
      console.log("");
    }
  
    public toTeamLead(): void {
      this.employee.salary = this.employee.salary + 1500;
      this.employee.position = "Team Lead";
      console.log(
        `${this.employee.name} is now a ${this.employee.position} with a salary of ${this.employee.salary}`
      );
    }
    public toFrontEnd(): void {
      this.employee.salary = this.employee.salary + 1500;
      this.employee.position = "Front End Developer";
      console.log(
        `${this.employee.name} is now a ${this.employee.position} with a salary of ${this.employee.salary}`
      );
    }
  
    public save(): Memento {
      return new ConcreteMemento(this.employee.salary, this.employee.position);
    }
  
    public undo(memento: Memento): void {
      this.employee.salary = memento.getSalary();
      this.employee.position = memento.getPosition();
      console.log(
        `${
          this.employee.name
        } is back at the position of a ${memento.getPosition()} with a salary of ${memento.getSalary()}`
      );
    }
  }
  
  class ConcreteMemento implements Memento {
    private salary: number;
    private position: string;
  
    constructor(salary: number, position: string) {
      this.salary = salary;
      this.position = position;
    }
  
    public getSalary(): number {
      return this.salary;
    }
    public getPosition(): string {
      return this.position;
    }
  }
  
  class Caretaker {
    private mementos: Memento[] = [];
  
    private originator: Originator;
  
    constructor(originator: Originator) {
      this.originator = originator;
    }
  
    public backup(): void {
      this.mementos.push(this.originator.save());
    }
  
    public undo(): void {
      const memento = this.mementos.pop();
  
      this.originator.undo(memento);
    }
  }
  
  let employee1 = new Employee(101, "John Doe", 4500, "Back End Developer");
  let employee2 = new Employee(102, "Jane Doe", 5000, "UI/UX");
  
  const originator1 = new Originator(employee1);
  const caretaker1 = new Caretaker(originator1);
  
  const originator2 = new Originator(employee2);
  const caretaker2 = new Caretaker(originator2);
  
  caretaker1.backup();
  originator1.toTeamLead();
  
  caretaker2.backup();
  originator2.toFrontEnd();
  
  caretaker1.undo();