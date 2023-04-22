import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';
import { GlobalStyles } from './components/GlobalStyles.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
);
