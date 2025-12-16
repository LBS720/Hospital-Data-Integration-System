/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import patientsRoutes from "./routes/patients";
import admissionsRoutes from "./routes/admissions";
import labTestsRoutes from "./routes/labTests";
import labResultsRoutes from "./routes/labResults";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/patients", patientsRoutes);
app.use("/admissions", admissionsRoutes);
app.use("/lab_tests", labTestsRoutes);
app.use("/lab_results", labResultsRoutes);

app.get("/", (req, res) => res.send("Backend is running!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
