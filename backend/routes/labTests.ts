/** @format */

import { Router } from "express";
import { getAllLabTests } from "../db/queries.ts/labTestsQueries";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const labTests = await getAllLabTests();
    res.json(labTests);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
