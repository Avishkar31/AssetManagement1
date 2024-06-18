import React from "react";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import { createBrowserRouter } from "react-router-dom";

import Stock from "./components/Stock";
import New from "./components/New";

const App = () => {
  return <Home />;
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/hardware",
    element: <Dashboard />
  },
  {
    path: "/Stock",
    element: <Stock />
  },
  {
    path: "/stock/new",
    element: <New />
  }
  // {
  //   path: "/stock/updating",
  //   element: <Updating />
  // }
]);

export default App;
