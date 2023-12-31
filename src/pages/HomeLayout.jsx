import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <h2 className="text-2xl text-primary">comfy</h2>
      </nav>

      <div className="py-20 align-element">
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
