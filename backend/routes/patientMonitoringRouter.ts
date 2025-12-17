/** @format */

import { Router } from "express";
import { getPatientsWithoutRecentLabTests } from "../db/queries.ts/patientMonitoringQueries";
import {
  DBPatientMonitoring,
  PatientMonitoring,
} from "../models/patientMonitoring";
import { mapDbPatientMonitoringToPatientMonitoring } from "../utils/mapper/patientMonitoringMapper";

const router = Router();

router.get("/patients-without-recent-lab-tests", async (req, res) => {
  try {
    const patients = await getPatientsWithoutRecentLabTests();
    const patientsMonitoringResponse: PatientMonitoring[] = patients.map(
      mapDbPatientMonitoringToPatientMonitoring
    );
    res.json(patientsMonitoringResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
