import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="mx-auto d-flex justify-content-between align-items-center my-5 fs-4  ">
      <div className="">
        <Link className="text-decoration-none text-dark" to={"/"}>
          Goals
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-centers gap-5">
        <div>
          <Link className="text-decoration-none text-dark" to={"login"}>
            Login
          </Link>
        </div>
        <div>
          <Link className="text-decoration-none text-dark" to={"register"}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
