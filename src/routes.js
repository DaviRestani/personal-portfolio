import { createBrowserRouter } from "react-router-dom";
import { Projects } from "./views/projects/Projects";
import { Contact } from "./views/contact/Contact";
import { Portfolio } from "./views/portfolio/Portfolio";
import { RootLayout } from "./views/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);
