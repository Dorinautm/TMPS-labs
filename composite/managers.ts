import MngComponent from "./mngComponent";

export default class Manager extends MngComponent {
  constructor(name: string) {
    super(name);
  }
  public angajati = [];

  public Display() {
    console.log("  " + this.name);
    this.angajati.forEach((element) => {
      element.Display();
    });
  }

  public AddAngajat(component: MngComponent) {
    this.angajati.push(component);
  }
  public RemoveAngajat(component: MngComponent) {
    delete this.angajati[this.angajati.indexOf(component)];
  }
}