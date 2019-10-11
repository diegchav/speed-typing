import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectText } from '../../redux/typing/typing.selectors';

import InputTextContainer from './input-text.styles';

const InputText = ({ text }) => (
  <InputTextContainer>
    <div className="text">
      {
        text.map((letter, i) => {
          return <span key={i}>{letter}</span>
        })
      }

    </div>
  </InputTextContainer>
);

const mapStateToProps = createStructuredSelector({
  text: selectText
});

export default connect(mapStateToProps)(InputText);