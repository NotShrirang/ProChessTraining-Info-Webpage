import React from "react";
import "./navbar.css";

const visitWebsite = () => {
  window.open("https://prochesstraining.com", "_blank");
};
const contactUs = () => {
  window.open("https://prochesstraining.com/home/contact_us", "_blank");
};

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img
              src="/prochess.webp"
              alt="ProChess Training Logo"
              height={70}
              width={70}
            />
          </a>
        </div>
        <div
          className="navbar-title"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          ProChess Training
        </div>
        <div className="navbar-button-container">
          <button className="navbar-button" onClick={visitWebsite}>
            {"Visit Our Website".toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
