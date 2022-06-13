import React from "react";
import { useGlobalContext } from "./context";

export default function Submenu() {
  const { isSubmenuopen } = useGlobalContext();
  return (
    <aside className={`submenu ${isSubmenuopen && "show"}`}>submenu</aside>
  );
}
