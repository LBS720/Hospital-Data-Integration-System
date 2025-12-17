/** @format */

export interface Admission {
  patientId: string;
  hospitalizationCaseNumber: string;
  admissionDate: string;
  admissionTime: string;
  releaseDate: string | null;
  releaseTime: string | null;
  department: string;
  roomNumber: string;
}
