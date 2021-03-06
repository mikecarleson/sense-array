import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-ref" href="/">
        Sense[array]
      </a>
      <div className="navbar-right">
      <a className="login" href="/">
        Logout
      </a>
      </div>
    </nav>
  );
}

export default Nav;
