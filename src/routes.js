import { createBrowserRouter } from "react-router-dom";
import { Projects } from "./views/projects/Projects";
import { Contact } from "./views/contact/Contact";
import { Portfolio } from "./views/portfolio/Portfolio";
import { RootLayout } from "./views/RootLayout";
import { Body } from "./components/bodyComponent/BodyComponent";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true, // "index: true" significa: se a rota for exatamente "/", carregue o Body
        element: <Body></Body>,
      },
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
