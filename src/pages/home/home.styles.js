import styled from 'styled-components';

const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .keyboard {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    background-color: #fafafa;
    border: 1px solid #cfd8dc;
  }

  .keyboard--row {
    display: flex;
  }

  .keyboard--key--box {
    margin: 0.5rem;
    padding: 2rem;
    border: 1px solid #cfd8dc;
    border-radius: 3px;
    width: 6rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #eceff1;
    transition: all .05s ease;
  }

  .keyboard--key--box:hover,
  .keyboard--key--box__pressed {
    transform: scale(1.1);
  }

  .keyboard--key {
    font-size: 1.5rem;
    color: #494949;
  }
`;

export default HomePageContainer;