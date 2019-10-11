import styled from 'styled-components';

const InputTextContainer = styled.div`
  width: 65%;
  height: 100px;
  background-color: #f5f5f6;
  display: flex;
  align-items: center;
  padding: 0 2rem;
  border-radius: 5px 5px 0 0;

  .text {
    font-family: 'Roboto', sans-serif;
    font-size: 2.8rem;
    color: #8d8d8d;
    letter-spacing: 0.2rem;
  }

  .text--letter__current {
    border-bottom: 3px solid #616161;
  }

  .text--letter__correct {
    background-color: #b2dfdb;
  }

  .text--letter__wrong {
    background-color: #ffcdd2;
  }
`;

export default InputTextContainer;