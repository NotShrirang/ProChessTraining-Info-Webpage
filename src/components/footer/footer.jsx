import React from "react";
import { useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  const navigate = useNavigate();

  function pageScroll(counter) {
    if (counter == 0) {
      return;
    }
    window.scrollBy(0, -15);
    scrolldelay = setTimeout(() => {
      pageScroll(counter - 1);
    }, 10);
  }

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
              {"Our Coaches"}
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
          <div className="footer-div-link">
            <a
              href="https://prochesstraining.com/home/our_testimonials"
              className="footer-div-link"
            >
              {"Testimonials"}
            </a>
          </div>
          <div className="footer-div-link">
            <a
              href="https://prochesstraining.com/news_blog/list/1"
              className="footer-div-link"
            >
              {"News"}
            </a>
          </div>
          <div className="footer-div-link">
            <a
              href="https://prochesstraining.com/home/privacy_policy"
              className="footer-div-link"
            >
              {"Privacy Policy"}
            </a>
          </div>
          <div className="footer-div-link">
            <a
              href="https://prochesstraining.com/home/terms_and_conditions"
              className="footer-div-link"
            >
              {"Terms & Conditions"}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
