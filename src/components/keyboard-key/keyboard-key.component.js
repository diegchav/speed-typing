import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectPressedKey } from '../../redux/typing/typing.selectors';

import KeyboardKeyContainer from './keyboard-key.styles';

const KeyboardKey = ({ values, size, pressedKey }) => {
  const classes = classNames({
    'pressed': pressedKey && (values.includes(pressedKey.toUpperCase()))

  });
  return (
    <KeyboardKeyContainer className={classes} size={size}>
      <span>{values[0]}</span>
      {
        values.length === 2
        ? <span>{values[1]}</span>
        : null
      }
    </KeyboardKeyContainer>
  )
};

KeyboardKey.defaultProps = {
  size: 1
};

KeyboardKey.propTypes = {
  values: PropTypes.arrayOf(PropTypes.string).isRequired
};

const mapStateToProps = createStructuredSelector({
  pressedKey: selectPressedKey
})

export default connect(mapStateToProps)(KeyboardKey);