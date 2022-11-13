import PropTypes from 'prop-types';

import Box from 'utils/Box';
import { Title } from './SectionTitle.styled';

const SectionTitle = ({ title, children }) => {
  return (
    <Box p={ 4 }>
      <Title>{title}</Title>
      {children}
    </Box>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionTitle;