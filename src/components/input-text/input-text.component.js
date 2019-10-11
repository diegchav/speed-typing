import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectText, selectTextIndex, selectIsWrong } from '../../redux/typing/typing.selectors';

import InputTextContainer from './input-text.styles';

const InputText = ({ text, textIndex, isWrong }) => {
  return (
    <InputTextContainer>
      <div className="text">
        {
          text.map((letter, i) => {
            const letterClasses = classNames({
              'text--letter__current': (i === textIndex),
              'text--letter__correct': (i < textIndex),
              'text--letter__wrong': (i === textIndex) && isWrong
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
  textIndex: selectTextIndex,
  isWrong: selectIsWrong
});

export default connect(mapStateToProps)(InputText);