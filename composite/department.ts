import MngComponent from "./mngComponent";

export default class Department extends MngComponent {
  constructor(name: string) {
    super(name);
  }
  private angajati = [];

  public Display() {
    console.log("" + this.name);
    this.angajati.forEach((element) => {
      element.Display();
    });
  }

  public AddManager(component: MngComponent) {
    this.angajati.push(component);
  }
  public RemoveManager(component: MngComponent) {
    delete this.angajati[this.angajati.indexOf(component)];
  }
}