import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { GlobalStyles } from './components/GlobalStyles.styled';
import bgImage from './images/bg.jpg';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/tweet-cards">
      <App />
      <GlobalStyles src={bgImage} />
    </BrowserRouter>
  </React.StrictMode>,
);
