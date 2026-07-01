import { BrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { Body } from "./components/bodyComponent/BodyComponent";
import { Header } from "./components/headerComponent/Header";
import { Provider } from "react-redux";
import { router } from "./routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
