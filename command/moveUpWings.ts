import Command from "./commandController";
import Wings from "./wings";

export default class MoveUpWings implements Command{
    
    private _wings:Wings;

    constructor(wings){
        this._wings = wings;
    }

    public Execute(): void {
        this._wings.moveUpWings();
    }

}