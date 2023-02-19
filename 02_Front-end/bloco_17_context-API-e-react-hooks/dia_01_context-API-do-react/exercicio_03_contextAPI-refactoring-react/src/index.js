import React from 'react';
import { render } from 'react-dom';
import ProviderContext from './context/ProviderContext';
import App from './App';
import './index.css';

render(
  <ProviderContext>
    <App />
  </ProviderContext>,
  document.getElementById('root'),
);
