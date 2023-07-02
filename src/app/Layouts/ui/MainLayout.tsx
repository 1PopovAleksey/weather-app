import { FC } from "react";
import { LayoutFooter, LayoutHeader } from "@/widgets";
import { Outlet } from "react-router-dom";

const MainLayout: FC = () => {
  return (
    <div className="flex h-screen flex-col justify-between overflow-x-hidden">
      <LayoutHeader />
      <main>
        <Outlet />
      </main>
      <LayoutFooter />
    </div>
  );
};

export default MainLayout;
