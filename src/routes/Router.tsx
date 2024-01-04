import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "pags";
import AppLayout from "./AppLayout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
