import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../assets/svgs/exportIcons";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100; // Negative to scroll *above* the element
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <div className="footer-container">
      <h2 className="footer-title">We are waiting for you to contact us</h2>
      <p className="footer-subtitle">
        You can write to us at any time and get an instant response.
      </p>

      <div className="email-form">
        <input type="email" placeholder="Enter your Email" />
        <button>Join</button>
      </div>

      <div className="footer-bottom">
        <span className="copyright">© Copywriting</span>
        <div className="footer-links">
          <div className="nav" onClick={() => scrollToSection("partners")}>
            Partners
          </div>
          <div className="nav" onClick={() => scrollToSection("how-we-work")}>
            How we work
          </div>
          <div className="nav" onClick={() => scrollToSection("review")}>
            Review
          </div>
          <div className="sales nav" onClick={() => scrollToSection("charity")}>
            charity
          </div>
        </div>
        <div className="footer-socials">
          <div>
            <FacebookIcon />
          </div>
          <div>
            <InstagramIcon />
          </div>
          <div>
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
