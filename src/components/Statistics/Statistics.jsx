import PropTypes from 'prop-types';
import {
  StatisticCard,
  StatisticTitel,
  StatisticList,
  StatisticItem,
  StatisticData,
} from './Statistics.styled';

import getRandomHexColor from './getRandomHexColor'

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticCard>
      {title && <StatisticTitel>{title}</StatisticTitel>}

      <StatisticList>
        {stats.map(stat => (
          <StatisticItem
            key={stat.id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <StatisticData>{stat.label}</StatisticData>
            <StatisticData>{stat.percentage}%</StatisticData>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticCard>
  );
};

Statistics.propTypes = {
  titel: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
