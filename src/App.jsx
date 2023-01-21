import { Route, Routes } from "react-router-dom";
import "./App.css";
import Enterprice from "./pages/Enterprice/Enterprice";
import HomePage from "./pages/HomePage/HomePage";
import MeetingPage from "./pages/MeetingPage/MeetingPage";
import NewsAbout from "./pages/NewsAbout/NewsAbout";
import NewsPage from "./pages/NewsPage/NewsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/enterprice" element={<Enterprice />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/about" element={<NewsAbout />} />
        <Route path="/meeting" element={<MeetingPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
