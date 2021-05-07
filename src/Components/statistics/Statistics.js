import React from 'react';
import PropTypes from 'prop-types';
import { Item, List, Section } from './StatisticsStyles'

const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);


const Statistics = ({ title, stats }) => (
  <Section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    <List className="stat-list">
      {stats.map(({id, label, percentage}) => (
        <Item
          className="item"
          key={id}
          style={{
            backgroundColor: '#' + randomColor(),
          }}
        >
          <span className="label">{label}</span>
          <span className="percentage">{percentage + '%'}</span>
        </Item>
      ))}
    </List>
  </Section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Statistics;
