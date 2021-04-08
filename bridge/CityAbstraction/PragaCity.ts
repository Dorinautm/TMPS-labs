import City from "./city";

export default class PragaCity extends City {
  public searchStore(): string {
    console.log("Searching in Praga for: ");
    
    return (
      `Store Name:  ${this.Store.GetStoreName()}\n` +
      "Item: " +
      this.Store.GetItem() +
      "\n" +
      "Price: " +
      this.Store.GetPrice() +
      "\n" 
    );
  }
}
