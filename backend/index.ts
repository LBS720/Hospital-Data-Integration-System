/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import patientsRoutes from "./routes/patientsRouter";
import admissionsRoutes from "./routes/admissionsRouter";
import labTestsRoutes from "./routes/labTestsRouter";
import labResultsRoutes from "./routes/labResultsRouter";
import patientMonitoringRoutes from "./routes/patientMonitoringRouter";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/patients", patientsRoutes);
app.use("/lab-tests", labTestsRoutes);
app.use("/admissions", admissionsRoutes);
app.use("/lab-results", labResultsRoutes);
app.use("/monitoring", patientMonitoringRoutes);

app.get("/", (req, res) => res.send("Backend is running!"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
