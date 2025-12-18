/** @format */

import { Router } from "express";
import { getAllLabResults } from "../db/queries.ts/labResultsQueries";
import { LabResult } from "../models/labResult";
import { mapDbLabResultToLabResult } from "../utils/mapper/labResultMapper";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const labResults = await getAllLabResults();
    const labResultsResponse: LabResult[] = labResults.map(
      mapDbLabResultToLabResult
    );
    res.json(labResultsResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
