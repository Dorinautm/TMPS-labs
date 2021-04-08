import City from "./city";

export default class ParisCity extends City {
  public searchStore(): string {
      
    console.log("Searching in Paris for: ");
    
    return (
      `Store Name:  ${this.Store.GetStoreName()}\n` +
      "Item: " +
      this.Store.GetItem() +
      "\n" +
      "Price: " +
      this.Store.GetPrice() +
      "\n" +
      "Details: " +
      this.Store.GetDetails() +
      "\n"
    );
  }
}
