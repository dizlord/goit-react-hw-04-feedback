import PropTypes from 'prop-types';

import Box from 'utils/Box';
import {StatisticsText} from './Statistics.styled'

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => { 
  return (
    <Box>
      <StatisticsText>Good: {good}</StatisticsText>
      <StatisticsText>Neutral: {neutral}</StatisticsText>
      <StatisticsText>Bad: {bad}</StatisticsText>
      <StatisticsText>Total: {total}</StatisticsText>
      <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>
    </Box>)
}
 
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
}

export default Statistics;