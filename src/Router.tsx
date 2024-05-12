import { RouterProvider, createHashRouter } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Initial } from "./pages/initial";
import { Skills } from "./pages/skills";
import { Portifolio } from "./pages/portifolio";
import { Certificates } from "./pages/certificates";
import { Contacts } from "./pages/contact";

const routes = createHashRouter([
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
      {
        path: "portifolio",
        element: <Portifolio />,
      },
      {
        path: "certificados",
        element: <Certificates />,
      },
      {
        path: "contatos",
        element: <Contacts />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={routes} />;
}
