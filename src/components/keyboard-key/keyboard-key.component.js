import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import KeyboardKeyContainer from './keyboard-key.styles';

const KeyboardKey = ({ value, space }) => {
  const classes = classNames({
    'space-key': space
  });
  return (
    <KeyboardKeyContainer className={classes}>
      <span>{value}</span>
    </KeyboardKeyContainer>
  )
};

KeyboardKey.defaultProps = {
  space: false
};

KeyboardKey.propTypes = {
  value: PropTypes.string.isRequired
};

export default KeyboardKey;