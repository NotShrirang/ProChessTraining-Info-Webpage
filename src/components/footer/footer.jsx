import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-div">
        <div className="footer-div-logo">
          <img
            src="prochess.webp"
            alt=""
            height={60}
            width={60}
            className="footer-div-logo"
          />
        </div>
        <div className="footer-div-title-container">
          <div className="footer-div-title">{"ProChess Training"}</div>
          <div className="footer-div-subtitle">{"©️Copyrights 2023"}</div>
        </div>
        <div className="footer-div-link-list">
          <div className="footer-div-link">
            <a
              href="https://prochesstraining.com/home/our_coaches"
              className="footer-div-link"
            >
              {"Coaches"}
            </a>
          </div>
          <div className="footer-div-link">
            <a
              href="https://prochesstraining.com/home/contact_us"
              className="footer-div-link"
            >
              {"Contact Us"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
