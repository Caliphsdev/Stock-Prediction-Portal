import React from "react";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <nav className="navbar pt-3 pb-3   d-flex justify-content-between align-items-start container">
        <a className="navbar-brand text-light" href="">
          Stock Prediction Portal
        </a>

        <div>
          <Button text="Login"  className="btn-outline-info"/>
          &nbsp;
          <Button text="Register" className="btn-info"/>
        </div>
      </nav>
    </>
  );
};

export default Header;
