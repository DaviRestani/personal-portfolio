import { Header } from "../components/headerComponent/Header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return (
    <>
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
