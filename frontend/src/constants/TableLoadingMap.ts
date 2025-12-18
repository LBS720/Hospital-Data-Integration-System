/** @format */

import { SidebarOption } from "./SidebarOptions";
import {
  admissionsStore,
  labResultsStore,
  labTestsStore,
  patientsStore,
  patientsMonitoringStore,
} from "../store";

export const loadingMap = {
  [SidebarOption.Patients]: patientsStore.isLoading,
  [SidebarOption.Admissions]: admissionsStore.isLoading,
  [SidebarOption.LabTests]: labTestsStore.isLoading,
  [SidebarOption.LabResults]: labResultsStore.isLoading,
  [SidebarOption.Monitoring]: patientsMonitoringStore.isLoading,
};
