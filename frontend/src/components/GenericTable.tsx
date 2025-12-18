/** @format */

import { theme } from "../theme";

type GenericTableProps = {
  columns: { header: string; accessor: string }[];
  data: any[];
};

export function GenericTable({ columns, data }: GenericTableProps) {
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
              key={col.accessor}
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
                key={col.accessor}
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
