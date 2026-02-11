import { Outlet } from "react-router";
import Header from "./Header";

const Main = () => {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-x-0 top-0 z-1000 px-5 pt-5 md:px-10 md:pt-5">
        <Header />
      </div>
      <div className="px-5 pb-5 pt-28 md:px-10 md:pb-10 md:pt-36">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;

