/** @format */

import { makeAutoObservable } from "mobx";
import { LabTest } from "../models/labTest";

class LabTestsStore {
  labTests: LabTest[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLabTests(labTests: LabTest[]) {
    this.labTests = labTests;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  async fetchLabTests() {
    this.setLoading(true);
    this.setError(null);
    try {
      const response = await fetch("/api/labTests");
      if (!response.ok) throw new Error("Failed to fetch lab tests");
      const data = await response.json();
      this.setLabTests(data);
    } catch (err: any) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }
}

const labTestsStore = new LabTestsStore();
export default labTestsStore;
