import PropTypes from 'prop-types';

import { Transaction } from './Transaction';
import {
  TransactionTabl,
  TableHeader,
  TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTabl>
      <TableHeader>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHeader>

      <TableBody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </TableBody>
    </TransactionTabl>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
