import React from 'react';

import InputText from '../../components/input-text/input-text.component';
import Keyboard from '../../components/keyboard/keyboard.component';

import HomePageContainer from './home.styles';

const HomePage = () => (
  <HomePageContainer>
    <InputText />
    <Keyboard />
  </HomePageContainer>
);

export default HomePage;