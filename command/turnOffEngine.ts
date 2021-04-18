import Command from "./commandController";
import Engine from "./engine";

export default class TurnOffEngine implements Command{
    
    private _engine:Engine;

    constructor(engine){
        this._engine = engine;
    }

    public Execute(): void {
        this._engine.turnOffEngine();
    }

}