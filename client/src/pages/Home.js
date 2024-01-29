import React from "react";

import Layout from "../components/Layout";
import '../styles/home.css'

const Home = () => {
  return (
    <Layout>
      <div className="home-wrapper">
        <span className="icon">D</span>
        <div className="home-title">
          <h4>
            <strong>digital</strong>flake
          </h4>
        </div>
        <div className="welcome">Welcome to Digital Flake Admin</div>
      </div>
    </Layout>
  );
};

export default Home;
