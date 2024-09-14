import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store/index';

import Navigation from './src/navigation';

const MainApp = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default MainApp;
