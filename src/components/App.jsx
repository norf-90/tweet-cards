import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../pages/SharedLayut/SharedLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />} />
    </Routes>
  );
}

export default App;
