import React from 'react';
import PropTypes from 'prop-types'
import { Table } from './TransactionHistoryStyles'

const TransactionHistory = ({ items }) => (
  <Table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string.isRequired
    ).isRequired,
  ),
};

export default TransactionHistory;
