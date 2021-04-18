import DecreasingPowerEngine from "./decreasingPower";
import EncreasingPowerEngine from "./encreasingPower";
import Engine from "./engine";
import MoveDownWings from "./moveDownWings";
import MoveFlatWings from "./moveFlatWings";
import MoveUpWings from "./moveUpWings";
import PlaneBoardInvoker from "./planeBoard";
import TurnOffEngine from "./turnOffEngine";
import TurnOnEngine from "./turnOnEngine";
import Wings from "./wings";

let engine = new Engine();
let wings = new Wings();
let BTNturnOnEngine = new TurnOnEngine(engine);
let BTNturnOffEngine = new TurnOffEngine(engine);
let BTNmoveUpWings = new MoveUpWings(wings);
let BTNmoveDownWings = new MoveDownWings(wings);
let BTNmoveFlatWings= new MoveFlatWings(wings);
let BTNencreasePowerEngine = new EncreasingPowerEngine(engine);
let BTNdecreasePowerEngine = new DecreasingPowerEngine(engine);

let planeBoard = new PlaneBoardInvoker(
    BTNmoveUpWings,
    BTNmoveDownWings,
    BTNmoveFlatWings,
    BTNturnOnEngine,
    BTNturnOffEngine,
    BTNencreasePowerEngine,
    BTNdecreasePowerEngine
);

planeBoard.turnOnEngine();
planeBoard.moveUpWings();
planeBoard.encreasePowerEngine();
planeBoard.moveFlatWings();
planeBoard.decreasePowerEngine();
planeBoard.moveDownWings();
planeBoard.turnOffEngine();




