/** @format */

import { pool } from "../dbConnector";

export async function getAllPatients() {
  const result = await pool.query("SELECT * FROM patient_information");
  return result.rows;
}
