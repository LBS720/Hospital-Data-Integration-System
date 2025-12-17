/** @format */

import React from "react";
import { theme } from "../theme";
import { TableColumn } from "../types/Table";

type GenericTableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
};

export function GenericTable<T extends object>({
  columns,
  data,
}: GenericTableProps<T>) {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        width: "100%",
        background: theme.tableCellBg,
      }}
    >
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={String(col.accessor)}
              style={{
                border: `1px solid ${theme.tableBorder}`,
                padding: "8px",
                background: theme.tableHeaderBg,
                color: theme.tableHeaderText,
              }}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col) => (
              <td
                key={String(col.accessor)}
                style={{
                  border: `1px solid ${theme.tableBorder}`,
                  padding: "8px",
                  background: theme.tableCellBg,
                  color: theme.tableCellText,
                }}
              >
                {String(row[col.accessor] ?? "")}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
