import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { isSidebarOpen, handleSidebar } = useGlobalContext();
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
            <button className="btn link-btn">products</button>
          </li>
          <li>
            <button className="btn link-btn">developers</button>
          </li>
          <li>
            <button className="btn link-btn">company</button>
          </li>
        </ul>
        <button className="btn sign-btn">sign in</button>
      </div>
    </nav>
  );
}
