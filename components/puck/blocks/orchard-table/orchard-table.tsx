import "@/lib/orchard";

export interface OrchardTableProps {
  caption: string;
  headers: { label: string }[];
  rows: { cells: { value: string }[] }[];
}

export function OrchardTableRender({
  caption,
  headers,
  rows,
}: OrchardTableProps) {
  const columns = headers ?? [];
  return (
    <div className="orchard-block" style={{ overflowX: "auto" }}>
      <table className="orchard-table-stacked-row-plus">
        {caption ? <caption>{caption}</caption> : null}
        <thead>
          <tr>
            {columns.map((header, index) => (
              <th scope="col" key={`${header.label}-${index}`}>
                {header.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(rows ?? []).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((header, cellIndex) => (
                <td key={cellIndex} data-before={`${header.label}: `}>
                  {row.cells?.[cellIndex]?.value ?? ""}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
