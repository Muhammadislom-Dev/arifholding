import React from "react";
import Nav from "../../components/Nav/Nav";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import SliderPage from "./components/Slider/Slider";
import "./Enterprice.css";

const Enterprice = () => {
  return (
    <div className="enterprice">
      <div className="meetingpage-navbar">
        <Navbar />
      </div>
      <Nav />
      <Catalog />
      <SliderPage />
      <Footer />
    </div>
  );
};

export default Enterprice;
