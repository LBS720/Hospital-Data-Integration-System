/** @format */

import { pool } from "../dbConnector";

export async function getAllLabResults() {
  const result = await pool.query("SELECT * FROM lab_results");
  return result.rows;
}
