/** @format */

import { makeAutoObservable } from "mobx";
import { LabResult } from "../models/labResult";

class LabResultsStore {
  labResults: LabResult[] = [];
  isLoading: boolean = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLabResults(labResults: LabResult[]) {
    this.labResults = labResults;
  }

  setLoading(isLoading: boolean) {
    this.isLoading = isLoading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  async fetchLabResults() {
    this.setLoading(true);
    this.setError(null);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/lab-results`
      );
      if (!response.ok) throw new Error("Failed to fetch lab results");
      const data = await response.json();
      this.setLabResults(data);
    } catch (err: any) {
      this.setError(err.message);
    } finally {
      this.setLoading(false);
    }
  }
}

const labResultsStore = new LabResultsStore();
export default labResultsStore;
