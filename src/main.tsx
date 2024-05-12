import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./globals.css";
import { Initial } from "./pages/initial";
import { Skills } from "./pages/skills";
import { DefaultLayout } from "./layout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Initial />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <RouterProvider router={routes} />

      {/* <BrowserRouter>
        <Router />
      </BrowserRouter> */}
    </>
  </React.StrictMode>
);
