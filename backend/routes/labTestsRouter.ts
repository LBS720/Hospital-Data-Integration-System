/** @format */

import { Router } from "express";
import { getAllLabTests } from "../db/queries.ts/labTestsQueries";
import { DBLabTest, LabTest } from "../models/labTest";
import { mapDbLabTestToLabTest } from "../utils/mapper/labTestMapper";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const labTests = await getAllLabTests();
    const labTestsResponse: LabTest[] = labTests.map(mapDbLabTestToLabTest);
    res.json(labTestsResponse);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
