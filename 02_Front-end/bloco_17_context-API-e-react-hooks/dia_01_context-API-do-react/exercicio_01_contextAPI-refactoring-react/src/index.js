import React from 'react';
import ReactDOM from 'react-dom';
import ProviderCarContext from './context/ProviderCarContext';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ProviderCarContext>
      <App />
    </ProviderCarContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
