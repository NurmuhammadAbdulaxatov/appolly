import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-top">
          <div className="h-links">
            <i className="fa-solid fa-envelope"></i>
            <a href="mailto:Info@youremail.com">Info@youremail.com</a>
            <i className="fa-solid fa-phone"></i>
            <a href="tel:4805550103">(480) 555-0103</a>
          </div>
          <div className="f-a-s">
            <i className="fa-brands fa-facebook-f"></i>
            <p></p>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>
        <nav>
          <div className="nav-1">
            <Link className="link" to="/">
              HOME
            </Link>
            <Link className="link" to="/about">
              ABOUT
            </Link>
            <Link className="link" to="/">
              FEATURES
            </Link>
          </div>
          <div className="logo">
            <img src="./Images/logo.png" alt="" />
          </div>
          <div className="nav-2">
            <Link className="link" to="/">
              SCREENSHOT
            </Link>
            <Link className="link" to="/">
              BLOG
            </Link>
            <Link className="link btn" to="/">
              DOWNLOAD
            </Link>
          </div>
        </nav>
        <div className="showcase">
          <div className="portion">
            <img className="ramka" src="./Images/ramka.png" alt="" />
            <div className="app">
              <h1>A Great App Makes Your Life Better</h1>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <strong>Download App Now</strong>
              <img src="./Images/download-btn.png" alt="" />
            </div>
          </div>
          <div className="portion">
            <img src="./Images/phone.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
