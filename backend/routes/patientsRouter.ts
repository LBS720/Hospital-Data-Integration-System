/** @format */

import { Router } from "express";
import { getAllPatients } from "../db/queries.ts/patientsQueries";
import { Patient } from "../models/patient";
import { mapDbPatientToPatient } from "../utils/mapper/patientMapper";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const patients = await getAllPatients();
    const patientsResponse: Patient[] = patients.map(mapDbPatientToPatient);
    res.json(patientsResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
