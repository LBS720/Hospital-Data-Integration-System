/** @format */

import { makeAutoObservable } from "mobx";
import { PatientMonitoring } from "../models/patientsMonitoring";

class PatientsMonitoringStore {
  patientsMonitoring: PatientMonitoring[] = [];
  isLoading: boolean = false;
  error: string | null = null;
  lastUpdated: Date | null = null;
  intervalId: NodeJS.Timeout | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPatientsMonitoring(patientsMonitoring: PatientMonitoring[]) {
    this.patientsMonitoring = patientsMonitoring;
    this.lastUpdated = new Date();
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  startPolling() {
    if (this.intervalId) return;
    this.fetchPatientsMonitoring();
    this.intervalId = setInterval(() => {
      this.fetchPatientsMonitoring();
    }, 60000);
  }

  stopPolling() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  setError(error: string | null) {
    this.error = error;
  }

  async fetchPatientsMonitoring() {
    this.setLoading(true);
    this.setError(null);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/monitoring/patients-without-recent-lab-tests`
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
