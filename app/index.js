import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./page";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
