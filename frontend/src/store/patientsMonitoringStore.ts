/** @format */

import { makeAutoObservable } from "mobx";
import { PatientMonitoring } from "../models/patientsMonitoring";

class PatientsMonitoringStore {
  patientsMonitoring: PatientMonitoring[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPatientsMonitoring(patientsMonitoring: PatientMonitoring[]) {
    this.patientsMonitoring = patientsMonitoring;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  async fetchPatientsMonitoring() {
    this.setLoading(true);
    this.setError(null);
    try {
      const response = await fetch(
        "/api/patientMonitoring/patients-without-recent-lab-tests"
      );
      if (!response.ok)
        throw new Error("Failed to fetch patient monitoring data");
      const data = await response.json();
      this.setPatientsMonitoring(data);
    } catch (err: any) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }
}

const patientsMonitoringStore = new PatientsMonitoringStore();
export default patientsMonitoringStore;
