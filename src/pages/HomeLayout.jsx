import { Outlet } from "react-router-dom";
import { Header, Nav } from "../components";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Nav />

      <div className="py-20 align-element">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
