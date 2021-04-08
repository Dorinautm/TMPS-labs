import IStore from "../StoreImplementation/Store";

export default abstract class City {
  public Store: IStore;

  public abstract searchStore(): string;
}
