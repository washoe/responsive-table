import React from "react";
import './Table.css';

/**
 * Creates some arbitrary tabular data - in this case, times tables
 * @param size rows / columns
 * @returns
 */
const getMockData = (size: number): any[] => {
  return Array(size)
    .fill(1)
    .map((row, rowIndex) =>
      Array(size)
        .fill((rowIndex + 1) * row)
        .map((item, columnIndex) => (columnIndex + 1) * item)
        .reduce(
          (result, item, columnIndex) => ({
            ...result,
            [`${columnIndex + 1} times table`]: item,
          }),
          {}
        )
    );
};

function Table() {
  const mockData: any[] = getMockData(70);
  return (
    <table>
      <thead>
        <tr>
          {Object.keys(mockData[0]).map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mockData.map((row, rowIndex) => (
          <tr key={rowIndex} aria-label={`${rowIndex + 1} times table`}>
            {Object.values(row).map((value, valueIndex) => (
              <td key={valueIndex} aria-label={`${rowIndex + 1} x ${valueIndex + 1 }`}>{value as String}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
