import React from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <ul className="tabs">
          <li>
            <Link to="/Home" className="tab">Home</Link>
          </li>
          <li>
            <Link to="/category" className="tab">Category</Link>
          </li>
          <li>
            <Link to="/products" className="tab">Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
