/** @format */

import { pool } from "../dbConnector";

export async function getPatientsWithoutRecentLabTests() {
  const result = await pool.query(
    "SELECT * FROM get_patients_without_recent_lab_tests()"
  );
  return result.rows;
}
