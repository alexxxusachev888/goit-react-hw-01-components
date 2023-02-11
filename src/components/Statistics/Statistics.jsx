import PropTypes from 'prop-types';
import { Section, Title, StatList, Item, Label, Percentage } from './Statistics.styled';

export function Statistics({title, stats}) {
    return (<Section>
    <Title>{title ? title : "Upload files"}</Title>
  
    <StatList>
        {stats.map(({id, label, percentage}) => {
            return <Item key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}</Percentage>
          </Item>
        })}
    </StatList>
  </Section>)
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