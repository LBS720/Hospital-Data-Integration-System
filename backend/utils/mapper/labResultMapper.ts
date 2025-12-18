/** @format */

import { DBLabResult, LabResult } from "../../models/labResult";

export function mapDbLabResultToLabResult(dbLabResult: DBLabResult): LabResult {
  return {
    resultId: dbLabResult.result_id,
    testId: dbLabResult.test_id,
    resultValue: dbLabResult.result_value,
    resultUnit: dbLabResult.result_unit,
    referenceRange: dbLabResult.reference_range,
    resultStatus: dbLabResult.result_status,
    performedDate: dbLabResult.performed_date,
    performedTime: dbLabResult.performed_time,
    reviewingPhysician: dbLabResult.reviewing_physician,
  };
}
