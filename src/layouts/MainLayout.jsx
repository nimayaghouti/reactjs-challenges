import { Outlet } from "react-router-dom";
import Header from "@/components/common/Header";
import classes from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={classes.container}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
