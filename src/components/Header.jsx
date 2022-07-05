import React, { useState } from "react";
import logo from "../img/la cuvee/logo.png";

const Header = ({ onTop }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const clearMenu = () => {
    setOpenMenu(false);
  };
  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-cente"
      style={
        onTop
          ? {}
          : {
              top: 0,
              background: "rgba(0, 0, 0, 0.85)",
              borderBottom: "1px solid #37332a",
            }
      }
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
        {/* <h1 className="logo me-auto me-lg-0">
          <a href="index.html">Restaurantly</a>
        </h1> */}
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        <a href="index.html" className="logo me-auto me-lg-0">
          <img src={logo} alt="" className="img-fluid" />
        </a>

        <nav
          id="navbar"
          className={
            openMenu
              ? "navbar order-last order-lg-0 navbar-mobile"
              : "navbar order-last order-lg-0"
          }
        >
          <ul>
            <li>
              <a onClick={clearMenu} className="nav-link scrollto" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a
                onClick={clearMenu}
                className="nav-link scrollto"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a onClick={clearMenu} className="nav-link scrollto" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a
                onClick={clearMenu}
                className="nav-link scrollto"
                href="#events"
              >
                Events
              </a>
            </li>
            <li>
              <a
                onClick={clearMenu}
                className="nav-link scrollto"
                href="#gallery"
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                onClick={clearMenu}
                className="nav-link scrollto"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
          <i
            onClick={toggleMenu}
            className={
              openMenu
                ? "bi bi-x mobile-nav-toggle"
                : "bi bi-list mobile-nav-toggle"
            }
          ></i>
        </nav>
        {/* <a
          href="#book-a-table"
          className="book-a-table-btn scrollto d-none d-lg-flex"
        >
          Book a table
        </a> */}
      </div>
    </header>
  );
};

export default Header;
