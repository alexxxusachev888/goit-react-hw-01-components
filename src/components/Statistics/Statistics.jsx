import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export function Statistics({title, stats}) {
    return (<section className={css.statistics}>
    <h2 className={css.title}>{title ? title : "Upload files"}</h2>
  
    <ul className={css.stat__list}>
        {stats.map(({id, label, percentage}) => {
            return <li className={css.item} key={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        })}
    </ul>
  </section>)
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    )
}