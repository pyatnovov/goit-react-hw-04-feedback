import { Button } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
