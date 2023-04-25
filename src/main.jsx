import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import bgImage from './assets/images/bg.jpg';
import App from './components/App';
import { GlobalStyles } from './components/GlobalStyles.styled';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/tweet-cards">
    <App />
    <GlobalStyles src={bgImage} />
  </BrowserRouter>,
  // </React.StrictMode>,
);
