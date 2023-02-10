import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export function TransactionHistory({items}) {
   return ( <table className={css.transaction__history}>
  <thead className={css.transaction__thread}>
    <tr className={css.transaction__header}>
      <th className={css.transaction__th}>Type</th>
      <th className={css.transaction__th}>Amount</th>
      <th className={css.transaction__th}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transaction__body}>
    {items.map(({id, type, amount, currency }) => {
        return <tr className={css.transaction__tr}key={id}>
        <td className={css.transaction__td}>{type}</td>
        <td className={css.transaction__td}>{amount}</td>
        <td className={css.transaction__td}>{currency}</td>
      </tr>
    })}
  </tbody>
</table>)
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