import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Service from "./components/Service/Service";
import Content from "./components/Content/Content";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-list">
        <Navbar />
        <Header />
      </div>
      <Category />
      <Service />
      <Content />
    </div>
  );
};

export default HomePage;
