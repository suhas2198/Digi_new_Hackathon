import React from "react";
import "../styles/layout.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import {Toaster} from 'react-hot-toast'
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout-wrapper">
        <div className="layout-wrapper-item2">
          <Sidebar />
        </div>

        <div className="layout-wrapper-item1">
          <main style={{ height: "90vh" }}> <Toaster/>{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
