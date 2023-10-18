import React from 'react';
import TableRow from '../TableRow/TableRow';
import styles from './Table.module.css'

const Table = (props) => {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item) => (
          <TableRow rowData={item} key={item.year} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
