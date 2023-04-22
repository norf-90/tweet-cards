import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Page404 from '../pages/Page404/Page404';
import SharedLayout from '../pages/SharedLayut/SharedLayout';
import Tweets from '../pages/Tweets/Tweets';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
