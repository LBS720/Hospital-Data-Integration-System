/** @format */

import { Router } from "express";
import { getPatientsWithoutRecentLabTests } from "../db/queries.ts/patientMonitoringQueries";

const router = Router();

router.get("/patients-without-recent-lab-tests", async (req, res) => {
  try {
    const patients = await getPatientsWithoutRecentLabTests();
    res.json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
