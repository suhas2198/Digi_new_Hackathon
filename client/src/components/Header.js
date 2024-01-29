import React from "react";
import "../styles/header.css";
import { CgProfile } from "react-icons/cg";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const auth = localStorage.getItem("admin");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");

    toast.success("You succesfully logged out");
  };

  return (
    <div className="header">
      <div className="title">
        <strong className="D">D</strong>digitalflake
      </div>

      <div className="profile-icon">
        <Link style={{ color: "white" }} onClick={logout} to="/login">
          {" "}
          <CgProfile />
        </Link>
      </div>
    </div>
  );
};

export default Header;
