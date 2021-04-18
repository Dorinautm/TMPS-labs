import Command from "./commandController";

export default class PlaneBoardInvoker{
    private _moveUpWings: Command;
    private _moveDownWings: Command;
    private _moveFlatWings: Command;
    private _turnOnEngine: Command;
    private _turnOffEngine: Command;
    private _encreasePowerEngine: Command;
    private _decreasePowerEngine: Command;

    constructor(
        moveUpWings:Command,
        moveDownWings:Command,
        moveFlatWings:Command,
        turnOnEngine:Command,
        turnOffEngine:Command,
        encreasePowerEngine:Command,
        decreasePowerEngine:Command
    ){
        this._moveUpWings = moveUpWings;
        this._moveDownWings = moveDownWings;
        this._moveFlatWings = moveFlatWings;
        this._turnOnEngine = turnOnEngine;
        this._turnOffEngine = turnOffEngine;
        this._encreasePowerEngine = encreasePowerEngine;
        this._decreasePowerEngine = decreasePowerEngine;
    }

    public moveUpWings(){
        this._moveUpWings.Execute();
    }
    public moveDownWings(){
        this._moveDownWings.Execute();
    }
    public moveFlatWings(){
        this._moveFlatWings.Execute();
    }
    public turnOnEngine(){
        this._turnOnEngine.Execute();
    }
    public turnOffEngine(){
        this._turnOffEngine.Execute();
    }
    public encreasePowerEngine(){
        this._encreasePowerEngine.Execute();
    }
    public decreasePowerEngine(){
        this._decreasePowerEngine.Execute();
    }
}