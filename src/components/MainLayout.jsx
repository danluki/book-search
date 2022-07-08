import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
const MainLayout = () => {
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
