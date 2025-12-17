/** @format */

import { Router } from "express";
import { getAllPatients } from "../db/queries.ts/patientsQueries";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const patients = await getAllPatients();
    res.json(patients);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

export default router;
