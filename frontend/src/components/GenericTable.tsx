/** @format */

import { theme } from "../theme";

type GenericTableProps = {
  columns: { header: string; accessor: string }[];
  data: any[];
};

export function GenericTable({ columns, data }: GenericTableProps) {
  return (
    <div
      style={{
        width: "100%",
        overflowX: "auto",
        overflowY: "auto",
        maxHeight: "60vh",
      }}
    >
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
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
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
    </div>
  );
}
