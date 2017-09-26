import React from 'react';
import AppWrapper from './components/AppWrapper';
import App from './containers/App';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <AppWrapper>
      <App />
    </AppWrapper>
  </Provider>
);

export default Root;
