import PropTypes from 'prop-types';

import Box from 'utils/Box';
import {FeedBackButton} from './Feedback.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <Box>
      {options.map((option, index) => (
        <FeedBackButton key={index} onClick={ () => onLeaveFeedback(option) }>{ option }</FeedBackButton>
      )) }
    </Box>
  );
}
 
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;