/** @format */

export interface LabResult {
  resultId: string;
  testId: string;
  resultValue: string;
  resultUnit: string;
  referenceRange: string;
  resultStatus: string;
  performedDate: string;
  performedTime: string;
  reviewingPhysician: string;
}

export type DBLabResult = {
  result_id: string;
  test_id: string;
  result_value: string;
  result_unit: string;
  reference_range: string;
  result_status: string;
  performed_date: string;
  performed_time: string;
  reviewing_physician: string;
};
