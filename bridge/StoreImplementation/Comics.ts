import IStore from "./store";
export default class Comics implements IStore {
  private _name: string;
  private _item: string;
  private _price: number;
  private _author: string;

  constructor(name: string, item: string, price: number, author: string) {
    this._name = name;
    this._item = item;
    this._price = price;
    this._author = author;
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
    return this._author;
  }
}
