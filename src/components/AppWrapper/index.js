import React from 'react';
import Header from '../Header';
import './AppWrapper.css';

const AppWrapper = ({
  children
}) => (
  <div className="App">
    <Header />
    { children }
  </div>
);

export default AppWrapper;
