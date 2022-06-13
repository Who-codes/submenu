import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { isSidebarOpen, handleSidebar, openSubmenu, closeSubmenu } =
    useGlobalContext();

  const displaySubmenu = (e) => {
    openSubmenu();
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="logo">Logo</h2>
          <button className="btn toggle-btn" onClick={handleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="btn link-btn" onMouseOver={displaySubmenu}>
              products
            </button>
          </li>
          <li>
            <button className="btn link-btn" onMouseOver={displaySubmenu}>
              developers
            </button>
          </li>
          <li>
            <button className="btn link-btn" onMouseOver={displaySubmenu}>
              company
            </button>
          </li>
        </ul>
        <button className="btn sign-btn">sign in</button>
      </div>
    </nav>
  );
}
