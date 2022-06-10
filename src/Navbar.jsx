import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function Navbar() {
  const { isSidebarOpen, handleSidebar } = useGlobalContext();
  return (
    <nav className={`nav`}>
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="logo">Logo</h2>
          <button className="btn toggle-btn" onClick={handleSidebar}>
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}
