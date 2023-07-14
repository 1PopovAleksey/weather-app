import { FC } from "react";
import { Logo } from "@/widgets";
import Menu from "../Menu/Menu";

const LayoutHeader: FC = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-base-100">
          <Menu
            links={[
              { name: "Weather", href: "/" },
              { name: "Settings", href: "/settings" },
            ]}
          />
          <Logo logoName={"Weather App"} />
          <div className="navbar-end">
            <button className="btn btn-ghost">S</button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default LayoutHeader;
