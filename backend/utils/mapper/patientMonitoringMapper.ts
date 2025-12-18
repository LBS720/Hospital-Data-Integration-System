/** @format */

import {
  DBPatientMonitoring,
  PatientMonitoring,
} from "../../models/patientMonitoring";

export function mapDbPatientMonitoringToPatientMonitoring(
  dbPatientMonitoring: DBPatientMonitoring
): PatientMonitoring {
  return {
    patientId: dbPatientMonitoring.patient_id,
    firstName: dbPatientMonitoring.first_name,
    lastName: dbPatientMonitoring.last_name,
    hospitalizationCaseNumber: dbPatientMonitoring.hospitalization_case_number,
    admissionDate: dbPatientMonitoring.admission_date,
    admissionTime: dbPatientMonitoring.admission_time,
    department: dbPatientMonitoring.department,
    roomNumber: dbPatientMonitoring.room_number,
  };
}
