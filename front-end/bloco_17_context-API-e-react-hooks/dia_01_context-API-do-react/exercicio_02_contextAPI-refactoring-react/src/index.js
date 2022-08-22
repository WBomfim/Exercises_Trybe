import React from 'react';
import ReactDOM from 'react-dom';
import ProviderContext from './context/ProviderContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </React.StrictMode>,
  document.getElementById('root'),
);
