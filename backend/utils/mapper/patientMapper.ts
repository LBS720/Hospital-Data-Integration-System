/** @format */

import { DBPatient, Patient } from "../../models/patient";

export function mapDbPatientToPatient(dbPatient: DBPatient): Patient {
  return {
    patientId: dbPatient.patient_id,
    firstName: dbPatient.first_name,
    lastName: dbPatient.last_name,
    dateOfBirth: dbPatient.date_of_birth,
    primaryPhysician: dbPatient.primary_physician,
    insuranceProvider: dbPatient.insurance_provider,
    bloodType: dbPatient.blood_type,
    allergies: dbPatient.allergies,
  };
}
