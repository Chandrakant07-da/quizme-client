// components/MyTableComponent.tsx

import React from 'react';
import TableData from '../../types/table';
import styles from './Table.module.css'; // Import the CSS module

const Table: React.FC<{ tableData: TableData }> = ({ tableData }) => {
  return (
<div>
      {/* Use the local class 'myTable' */}
      <table className={styles.myTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
