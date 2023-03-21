import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import menu from "./Data";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <Link>
            <img
              src="https://www.palmpay.com/_next/static/media/logo.5ef03e1a.png?w=256&q=100"
              alt="palmpay"
              className="logo"
            />
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setshowLinks((prevState) => !prevState)}
          >
            {showLinks ? <FaBars /> : <FaTimes />}
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {menu.map((item) => {
              const { id, title, path, icon } = item;
              return (
                <li>
                  <Link to={path}>
                    {title}{" "}
                    <span
                      style={{
                        display: "inline-block",
                        justiftyContent: "center",
                        alignItems: "center",
                        color: "#c4c4c4",
                        fontSize: "1.2rem",
                        verticalAlign: "middle",
                      }}
                    >
                      {icon}
                    </span>
                  </Link>
                </li>
              );
            })}
            <li className="image">
              <Link>
                <img
                  className="nav-flag"
                  src="https://www.palmpay.com/_next/static/media/NG.a8d189be.png?w=96&q=100"
                  alt="palmpay"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
