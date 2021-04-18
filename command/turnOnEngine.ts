import Command from "./commandController";
import Engine from "./engine";

export default class TurnOnEngine implements Command{
    
    private _engine:Engine;

    constructor(engine){
        this._engine = engine;
    }

    public Execute(): void {
        this._engine.turnOnEngine();
    }

}