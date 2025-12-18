/** @format */

import { makeAutoObservable } from "mobx";
import { Patient } from "../models/patient";

class PatientsStore {
  patients: Patient[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setPatients(patients: Patient[]) {
    this.patients = patients;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  async fetchPatients() {
    this.setLoading(true);
    this.setError(null);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/patients`
      );
      if (!response.ok) throw new Error("Failed to fetch patients");
      const data = await response.json();
      this.setPatients(data);
    } catch (err: any) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }
}

const patientsStore = new PatientsStore();
export default patientsStore;
