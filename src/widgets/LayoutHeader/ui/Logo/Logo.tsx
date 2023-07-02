import { FC } from "react";
import { Logo } from "@/widgets/LayoutHeader/model/types";
import { Link } from "react-router-dom";

const Logo: FC<Logo> = ({ logoName }: Logo) => {
  return (
    <div className="navbar-center">
      <Link to="/" className="btn-ghost btn text-xl normal-case">
        {logoName}
      </Link>
    </div>
  );
};

export default Logo;
