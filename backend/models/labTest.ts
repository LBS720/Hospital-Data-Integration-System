/** @format */

export interface LabTest {
  testId: string;
  patientId: string;
  testName: string;
  orderDate: string;
  orderTime: string;
  orderingPhysician: string;
}

export type DBLabTest = {
  test_id: string;
  patient_id: string;
  test_name: string;
  order_date: string;
  order_time: string;
  ordering_physician: string;
};
