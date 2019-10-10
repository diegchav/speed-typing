import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPressedKey } from '../../redux/keyboard/keyboard.selectors';

import KeyboardKeyContainer from './keyboard-key.styles';

const KeyboardKey = ({ value, space, pressedKey }) => {
  const classes = classNames({
    'space': space,
    'pressed': pressedKey && (value === pressedKey.toUpperCase())

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

const mapStateToProps = createStructuredSelector({
  pressedKey: selectPressedKey
})

export default connect(mapStateToProps)(KeyboardKey);