import { List } from './Statistics.styed';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <List className="List">
        <li className="Item">Good:{good}</li>
        <li className="Item">Neutral:{neutral}</li>
        <li className="Item">Bad:{bad}</li>
        <li className="Item">Total:{total}</li>
        <li className="Item">Positive feedback:{positivePercentage}%</li>
      </List>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
