/** @format */

export interface PatientMonitoring {
  patientId: string;
  firstName: string;
  lastName: string;
  hospitalizationCaseNumber: string;
  admissionDate: string;
  admissionTime: string;
  department: string;
  roomNumber: string;
}

export type DBPatientMonitoring = {
  patient_id: string;
  first_name: string;
  last_name: string;
  hospitalization_case_number: string;
  admission_date: string;
  admission_time: string;
  department: string;
  room_number: string;
};
