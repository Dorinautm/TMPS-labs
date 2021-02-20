import { PatientBuilder } from './patient-builder';

export class Patient {
    name:string;
    room: string;
    desease: string;
    guardianName: string;
    guardianPhone: number;
    
    constructor(patientBuilder: PatientBuilder) {
        this.name = patientBuilder.name;
        this.room = patientBuilder.room;
        this.desease = patientBuilder.desease;
        this.guardianName = patientBuilder.guardianName;
        this.guardianPhone = patientBuilder.guardianPhone;
        
    }
}
// constructor(name: string) {
//     this._name = name;
// }

// setRoom(room: string) {
//     this._room = room;
//     return this;
// }

// setDiagnostic(desease:string) {
//     this._desease = desease;
//     return this;
// }
// setGuardian(guardianName:string) {
//     this._guardianName = guardianName;
//     return this;
// }
// setGuardianPhone(guardianPhone:number) {
//     this._guardianPhone = guardianPhone;
//     return this;
// }