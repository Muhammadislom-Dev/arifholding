import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="container">
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              So’nggi yangiliklar
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              Holding{" "}
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              Semento
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              Uzexim
            </a>
          </li>
          <li className="sidebar-item">
            <a href="#" className="sidebar-link">
              Islom moliyasi
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
