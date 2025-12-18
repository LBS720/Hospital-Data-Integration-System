/** @format */

import { SidebarOption } from "./SidebarOptions";
import {
  admissionsStore,
  labResultsStore,
  labTestsStore,
  patientsStore,
  patientsMonitoringStore,
} from "../store";

export const dataMap = {
  [SidebarOption.Patients]: () => patientsStore.patients,
  [SidebarOption.Admissions]: () => admissionsStore.admissions,
  [SidebarOption.LabTests]: () => labTestsStore.labTests,
  [SidebarOption.LabResults]: () => labResultsStore.labResults,
  [SidebarOption.Monitoring]: () => patientsMonitoringStore.patientsMonitoring,
};
