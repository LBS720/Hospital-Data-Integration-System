/** @format */

import { SidebarOption } from "./SidebarOptions";
import {
  admissionsStore,
  labResultsStore,
  labTestsStore,
  patientsStore,
  patientsMonitoringStore,
} from "../store";

export const fetchMap = {
  [SidebarOption.Patients]: () => patientsStore.fetchPatients(),
  [SidebarOption.Admissions]: () => admissionsStore.fetchAdmissions(),
  [SidebarOption.LabTests]: () => labTestsStore.fetchLabTests(),
  [SidebarOption.LabResults]: () => labResultsStore.fetchLabResults(),
  [SidebarOption.Monitoring]: () =>
    patientsMonitoringStore.fetchPatientsMonitoring(),
};
