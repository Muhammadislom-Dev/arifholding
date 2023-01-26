import React from "react";
import "./NewsAbout.css";
import Nav from "../../components/Nav/Nav";
import Footer from "../Footer/Footer";
import Sidebar from "../NewsPage/components/Sidebar/Sidebar";
import Sublime from "./components/Sublime/Sublime";

const NewsAbout = () => {
  return (
    <div className="newsabout">
      <Nav />
      <Sidebar />
      <Sublime />
      <Footer />
    </div>
  );
};

export default NewsAbout;
