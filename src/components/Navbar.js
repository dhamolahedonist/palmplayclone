import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

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
              <Link to="/">Press</Link>
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
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
