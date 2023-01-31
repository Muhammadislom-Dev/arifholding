import React from "react";
import { Route, Routes } from "react-router-dom";
import Enterprice from "./pages/Enterprice/Enterprice";
import HomePage from "./pages/HomePage/HomePage";
import MeetingPage from "./pages/MeetingPage/MeetingPage";
import NewsAbout from "./pages/NewsAbout/NewsAbout";
import NewsPage from "./pages/NewsPage/NewsPage";
import ScrollingText from "./ScrollText";

const Redirect = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/enterprice=:id" element={<Enterprice />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/about=:id" element={<NewsAbout />} />
        <Route path="/meeting" element={<MeetingPage />} />
      </Routes>
    </>
  );
};

export default Redirect;
