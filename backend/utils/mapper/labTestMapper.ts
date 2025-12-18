/** @format */

import { DBLabTest, LabTest } from "../../models/labTest";

export function mapDbLabTestToLabTest(dbLabTest: DBLabTest): LabTest {
  return {
    testId: dbLabTest.test_id,
    patientId: dbLabTest.patient_id,
    testName: dbLabTest.test_name,
    orderDate: dbLabTest.order_date,
    orderTime: dbLabTest.order_time,
    orderingPhysician: dbLabTest.ordering_physician,
  };
}
