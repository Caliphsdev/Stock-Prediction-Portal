import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar pt-3 pb-3   d-flex justify-content-between align-items-start container">
        <Link className="navbar-brand text-light" to='/'>
          Stock Prediction Portal
        </Link>

        <div>
          <Button text="Login"  className="btn-outline-info" url='/login'/>
          &nbsp;
          <Button text="Register" className="btn-info" url='/register'/>
        </div>
      </nav>
    </>
  );
};

export default Header;
