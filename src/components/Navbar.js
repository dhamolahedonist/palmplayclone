import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link>
          <img
            src="https://www.palmpay.com/_next/static/media/logo.5ef03e1a.png?w=256&q=100"
            alt="palmpay"
            className="logo"
          />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">
            Personal
            <span>
              <MdArrowDropDown
                style={{
                  display: "inline-block",
                  justiftyContent: "center",
                  alignItems: "center",
                  color: "#c4c4c4",
                  fontSize: "1.2rem",
                  verticalAlign: "middle",
                }}
              />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Agent </Link>
        </li>
        <li>
          <Link to="/">
            Company
            <span>
              <MdArrowDropDown
                style={{
                  display: "inline-block",
                  justiftyContent: "center",
                  alignItems: "center",
                  color: "#c4c4c4",
                  fontSize: "1.2rem",
                  verticalAlign: "middle",
                }}
              />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Press </Link>
        </li>
        <li>
          <Link>
            <img
              className="nav-flag"
              src="https://www.palmpay.com/_next/static/media/NG.a8d189be.png?w=96&q=100"
              alt="palmpay"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
