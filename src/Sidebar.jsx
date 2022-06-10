import React from "react";
import { useGlobalContext } from "./context";
import sublinks from "./data";

export default function Sidebar() {
  const { isSidebarOpen } = useGlobalContext();
  return (
    <aside className={`sidebar ${isSidebarOpen && "show"}`}>
      {/* <div> */}
      <ul className="sidebar-center">
        {sublinks.map((link, index) => {
          const { page, links } = link;
          return (
            <li className="sidebar-list" key={index}>
              <h4>{page}</h4>
              {links.map((item, index) => {
                const { label, icon, url } = item;
                return (
                  <a href={url} className="sidebar-links" key={index}>
                    {icon}
                    {label}
                  </a>
                );
              })}
            </li>
          );
        })}
      </ul>
      {/* </div> */}
    </aside>
  );
}
