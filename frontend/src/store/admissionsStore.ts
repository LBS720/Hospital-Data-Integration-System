/** @format */

import { makeAutoObservable } from "mobx";
import { Admission } from "../models/admission";

class AdmissionsStore {
  admissions: Admission[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAdmissions(admissions: Admission[]) {
    this.admissions = admissions;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  async fetchAdmissions() {
    this.setLoading(true);
    this.setError(null);
    try {
      const response = await fetch("/api/admissions");
      if (!response.ok) throw new Error("Failed to fetch admissions");
      const data = await response.json();
      this.setAdmissions(data);
    } catch (err: any) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }
}

const admissionsStore = new AdmissionsStore();
export default admissionsStore;
