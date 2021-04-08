import { PatientBuilder } from './patient-builder';
const newPatient = new PatientBuilder('Anne E.')
 .setRoom('A04')
 .setDiagnostic('Covid')
 .setGuardian('Jane N.')
 .setGuardianPhone(32659994)
 .build()

console.log(newPatient);