import PropTypes from 'prop-types';

import {
  Table,
  ColumnTitle,
  InfoList,
  InfoItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <ColumnTitle>Type</ColumnTitle>
          <ColumnTitle>Amount</ColumnTitle>
          <ColumnTitle>Currency</ColumnTitle>
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => (
          <InfoList key={item.id} idx={idx}>
            <InfoItem>{item.type}</InfoItem>
            <InfoItem>{item.amount}</InfoItem>
            <InfoItem>{item.currency}</InfoItem>
          </InfoList>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
