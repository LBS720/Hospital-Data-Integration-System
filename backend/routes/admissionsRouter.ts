/** @format */

import { Router } from "express";
import { getAllAdmissions } from "../db/queries.ts/admissionsQueries";
import { Admission } from "../models/admission";
import { mapDbAdmissionToAdmission } from "../utils/mapper/admissionMapper";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const admissions = await getAllAdmissions();
    const admissionsResponse: Admission[] = admissions.map(
      mapDbAdmissionToAdmission
    );
    res.json(admissionsResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
