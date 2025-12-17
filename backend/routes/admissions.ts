/** @format */

import { Router } from "express";
import { getAllAdmissions } from "../db/queries.ts/admissionsQueries";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const admissions = await getAllAdmissions();
    res.json(admissions);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
