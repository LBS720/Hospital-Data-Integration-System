/** @format */

import { pool } from "../dbConnector";

export async function getAllLabTests() {
  const result = await pool.query("SELECT * FROM lab_tests");
  return result.rows;
}
