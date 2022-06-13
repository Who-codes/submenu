import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isSublmenuOpen, setISSubmenuOpen] = useState("true");

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openSubmenu = () => {
    setISSubmenuOpen(true);
  };

  const closeSublmenu = () => {
    setISSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        handleSidebar,
        isSublmenuOpen,
        openSubmenu,
        closeSublmenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
