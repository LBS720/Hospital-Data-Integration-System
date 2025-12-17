/** @format */

export interface PatientMonitoring {
  patientId: string;
  hospitalizationCaseNumber: string;
  admissionDate: string;
  admissionTime: string;
  department: string;
  roomNumber: string;
}

export type DBPatientMonitoring = {
  patient_id: string;
  hospitalization_case_number: string;
  admission_date: string;
  admission_time: string;
  department: string;
  room_number: string;
};
