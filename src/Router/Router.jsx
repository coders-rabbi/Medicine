import React from "react";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
