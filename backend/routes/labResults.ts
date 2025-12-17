/** @format */

import { Router } from "express";
import { getAllLabResults } from "../db/queries.ts/labResultsQueries";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const labResults = await getAllLabResults();
    res.json(labResults);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
