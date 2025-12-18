/** @format */

import { SidebarOption } from "./SidebarOptions";

export const columnsMap = {
  [SidebarOption.Patients]: [
    { header: "ID", accessor: "patientId" },
    { header: "First Name", accessor: "firstName" },
    { header: "Last Name", accessor: "lastName" },
    { header: "Date of Birth", accessor: "dateOfBirth" },
    { header: "Primary Physician", accessor: "primaryPhysician" },
    { header: "Insurance", accessor: "insuranceProvider" },
    { header: "Blood Type", accessor: "bloodType" },
    { header: "Allergies", accessor: "allergies" },
  ],
  [SidebarOption.Admissions]: [
    { header: "Case Number", accessor: "hospitalizationCaseNumber" },
    { header: "Patient ID", accessor: "patientId" },
    { header: "Admission Date", accessor: "admissionDate" },
    { header: "Admission Time", accessor: "admissionTime" },
    { header: "Release Date", accessor: "releaseDate" },
    { header: "Release Time", accessor: "releaseTime" },
    { header: "Department", accessor: "department" },
    { header: "Room", accessor: "roomNumber" },
  ],
  [SidebarOption.LabTests]: [
    { header: "Test ID", accessor: "testId" },
    { header: "Patient ID", accessor: "patientId" },
    { header: "Test Name", accessor: "testName" },
    { header: "Order Date", accessor: "orderDate" },
    { header: "Order Time", accessor: "orderTime" },
    { header: "Ordering Physician", accessor: "orderingPhysician" },
  ],
  [SidebarOption.LabResults]: [
    { header: "Result ID", accessor: "resultId" },
    { header: "Test ID", accessor: "testId" },
    { header: "Value", accessor: "resultValue" },
    { header: "Unit", accessor: "resultUnit" },
    { header: "Reference Range", accessor: "referenceRange" },
    { header: "Status", accessor: "resultStatus" },
    { header: "Performed Date", accessor: "performedDate" },
    { header: "Performed Time", accessor: "performedTime" },
    { header: "Reviewing Physician", accessor: "reviewingPhysician" },
  ],
  [SidebarOption.Monitoring]: [
    { header: "Patient ID", accessor: "patientId" },
    { header: "Case Number", accessor: "hospitalizationCaseNumber" },
    { header: "Admission Date", accessor: "admissionDate" },
    { header: "Admission Time", accessor: "admissionTime" },
    { header: "Department", accessor: "department" },
    { header: "Room", accessor: "roomNumber" },
  ],
};
