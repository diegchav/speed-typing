import React from 'react';
import PropTypes from 'prop-types';

import KeyboardKey from '../keyboard-key/keyboard-key.component';

import KeyboardRowContainer from './keyboard-row.styles';

const KeyboardRow = ({ row }) => (
  <KeyboardRowContainer>
    {
      row.map((key, i) => <KeyboardKey key={i} {...key} />)
    }
  </KeyboardRowContainer>
);

KeyboardRow.propTypes = {
  row: PropTypes.array.isRequired
};

export default KeyboardRow;