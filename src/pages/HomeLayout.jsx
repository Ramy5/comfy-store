import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <h2 className="text-2xl text-primary">comfy</h2>
      </nav>

      <Outlet />
    </>
  );
};

export default HomeLayout;
