import MngComponent from "./mngComponent";

export default class Angajat extends MngComponent {
  constructor(name: string) {
    super(name);
  }

  public Display() {
    console.log("   " + this.name);
  }
}