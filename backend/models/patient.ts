/** @format */

export type DBPatient = {
  patient_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  primary_physician: string;
  insurance_provider: string;
  blood_type: string;
  allergies: string;
};
/** @format */

export interface Patient {
  patientId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  primaryPhysician: string;
  insuranceProvider: string;
  bloodType: string;
  allergies: string;
}
