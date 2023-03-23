import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import menu from "./Data";

const Navbar = () => {
  const [showLinks, setshowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [dropdown, setDropdown] = useState(false);

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
          <Link to="/">
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
            {menu.map((item, index) => {
              const { link, page, icon, url } = item;

              return (
                <li key={index}>
                  <Link to={url} className="page-links">
                    {page}
                    <span
                      style={{
                        position: "relative",
                        top: "3px",
                        marginRight: "10px",
                        color: "#c4c4c4",
                        fontSize: "1.2rem",
                      }}
                    >
                      {icon}
                    </span>
                  </Link>
                  <div className="submenu ">
                    {link.map((link, index) => {
                      const { label, url, icon } = link;
                      if (link === "") {
                        return <div className="hide-link"></div>;
                      }

                      return (
                        <Link to={url} key={index}>
                          <span style={{ fontSize: "0.9rem" }}>{label}</span>
                          <span
                            style={{
                              color: "#000080",
                              fontSize: "1.2rem",
                              width: "50px",
                              height: "50px",
                              position: "relative",
                              top: "5px",
                              left: "5px",
                              marginRight: "10px",
                            }}
                          >
                            {icon}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
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
