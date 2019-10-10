import React from 'react';

import HomePage from './pages/home/home.page';

import GlobalStyles from './global.styles';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <HomePage />
    </React.Fragment>
  );
}

export default App;
