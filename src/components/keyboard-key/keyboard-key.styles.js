import styled from 'styled-components';

const KeyboardKeyContainer = styled.div`
  margin: 0.5rem;
  padding: 2rem;
  border: 1px solid #4f9a94;
  border-radius: 3px;
  width: 6rem;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #80cbc4;
  transition: all .05s ease;

  &:hover,
  &.pressed {
    transform: scale(1.1);
  }

  &.space-key {
    width: 30rem;
  }

  span {
    font-size: 1.5rem;
    color: #00251a;
  }
`;

export default KeyboardKeyContainer;