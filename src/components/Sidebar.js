import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import menu from "./Data";
import { useGlobalContext } from "../context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <div>
          {menu.map((item, index) => {
            const { link, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {link.map((link, index) => {
                    const { label, url } = link;
                    return <a key={index}>{label}</a>;
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
