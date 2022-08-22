import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProviderContexts from './context/ProviderContexts';

ReactDOM.render(
  <React.StrictMode>
    <ProviderContexts>
      <App />
    </ProviderContexts>
  </React.StrictMode>,
  document.getElementById('root'),
);
