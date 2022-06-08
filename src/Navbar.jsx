import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className={`nav`}>
      <div className="nav-center">
        <div className="nav-header">
          <h2 className="logo">Logo</h2>
          <button className="btn toggle-btn">
            <AiOutlineMenu />
          </button>
        </div>
      </div>
    </nav>
  );
}
