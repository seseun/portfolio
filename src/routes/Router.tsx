import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import AppLayout from './AppLayout';
import { Home } from 'pags';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
