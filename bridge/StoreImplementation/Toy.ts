import IStore from "./Store";
export default class Toy implements IStore {
  private _name: string;
  private _item: string;
  private _price: number;
  private _manufacturer: string;

  constructor(name: string, item: string, price: number, manufacturer: string) {
    this._name = name;
    this._item = item;
    this._price = price;
    this._manufacturer = manufacturer;
  }

  public GetStoreName(): string {
    return this._name;
  }
  public GetItem(): string {
    return this._item;
  }
  public GetPrice(): number {
    return this._price;
  }
  public GetDetails(): string {
    return this._manufacturer;
  }
}
