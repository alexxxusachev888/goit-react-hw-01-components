import PropTypes from 'prop-types';
import { Table,TabHeader,TabData,TabRow } from './TransactionHistory.styled';

export function TransactionHistory({items}) {
   return ( <Table>
  <thead>
    <TabRow >
      <TabHeader>Type</TabHeader>
      <TabHeader>Amount</TabHeader>
      <TabHeader>Currency</TabHeader>
    </TabRow>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency }) => {
        return <TabRow key={id}>
        <TabData>{type}</TabData>
        <TabData>{amount}</TabData>
        <TabData>{currency}</TabData>
      </TabRow>
    })}
  </tbody>
</Table>)
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }))
}