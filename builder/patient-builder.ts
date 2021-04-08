import { Patient } from './patient';

export class PatientBuilder {

    //declaram atributele obiectului instantiat
    private  _room: string;
    private readonly _name: string
    private _desease: string;
    private _guardianName: string;
    private _guardianPhone: number = 784847473;

    //fieldurile necesare la crearea obiect
    constructor(name: string) {
        this._name = name;
    }
    //settere
    setRoom(room: string) {
        this._room = room;
        return this;
    }
    
    setDiagnostic(desease:string) {
        this._desease = desease;
        return this;
    }
    setGuardian(guardianName:string) {
        this._guardianName = guardianName;
        return this;
    }
    setGuardianPhone(guardianPhone:number) {
        this._guardianPhone = guardianPhone;
        return this;
    }

    build() {
        return new Patient(this);
    }

    get name() {
        return this._name;
    }

    get room() {
        return this._room;
    }

    get desease() {
        return this._desease;
    }

    get guardianName() {
        return this._guardianName;
    }
    get guardianPhone() {
        return this._guardianPhone;
    }

}