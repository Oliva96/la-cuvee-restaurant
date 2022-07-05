import React from "react";

const TopBar = ({ onTop }) => {
  return (
    <div
      id="topbar"
      className="d-flex align-items-center fixed-top"
      style={onTop ? {} : { opacity: 0 }}
    >
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-phone d-flex align-items-center">
            <span>+1 305 799-9387</span>
          </i>
          {/* <i className="bi bi-clock d-flex align-items-center ms-4">
            <span> Mon-Sat: 11AM - 23PM</span>
          </i> */}
        </div>
        {/* 
        <div className="languages d-none d-md-flex align-items-center">
          <ul>
            <li>En</li>
            <li>
              <a href="#">De</a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default TopBar;
