import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import "./MainLayout.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
