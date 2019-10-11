import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectText, selectTextIndex } from '../../redux/typing/typing.selectors';

import InputTextContainer from './input-text.styles';

const InputText = ({ text, textIndex }) => {
  return (
    <InputTextContainer>
      <div className="text">
        {
          text.map((letter, i) => {
            const letterClasses = classNames({
              'text--letter__current': (i === textIndex)
            });
            return <span key={i} className={letterClasses}>{letter}</span>
          })
        }

      </div>
    </InputTextContainer>
  );
};

const mapStateToProps = createStructuredSelector ({
  text: selectText,
  textIndex: selectTextIndex
});

export default connect(mapStateToProps)(InputText);