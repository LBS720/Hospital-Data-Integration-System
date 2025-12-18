/** @format */

import { DBAdmission, Admission } from "../../models/admission";

export function mapDbAdmissionToAdmission(dbAdmission: DBAdmission): Admission {
  return {
    hospitalizationCaseNumber: dbAdmission.hospitalization_case_number,
    patientId: dbAdmission.patient_id,
    admissionDate: dbAdmission.admission_date,
    admissionTime: dbAdmission.admission_time,
    releaseDate: dbAdmission.release_date,
    releaseTime: dbAdmission.release_time,
    department: dbAdmission.department,
    roomNumber: dbAdmission.room_number,
  };
}
