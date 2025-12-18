/** @format */

export interface Admission {
  hospitalizationCaseNumber: string;
  patientId: string;
  admissionDate: string;
  admissionTime: string;
  releaseDate: string | null;
  releaseTime: string | null;
  department: string;
  roomNumber: string;
}

export type DBAdmission = {
  hospitalization_case_number: string;
  patient_id: string;
  admission_date: string;
  admission_time: string;
  release_date: string | null;
  release_time: string | null;
  department: string;
  room_number: string;
};
