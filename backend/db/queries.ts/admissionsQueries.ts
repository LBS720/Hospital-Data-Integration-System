/** @format */

import { pool } from "../dbConnector";

export async function getAllAdmissions() {
  const result = await pool.query("SELECT * FROM admissions");
  return result.rows;
}
