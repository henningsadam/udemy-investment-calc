import React from 'react';
import TableRow from '../TableRow/TableRow';

const Table = (props) => {
  return (
    <table className='result'>
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
          <TableRow rowData={item} key={item['year'].toString()} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
