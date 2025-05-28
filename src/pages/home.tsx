import { useState } from "react";
import hand1 from "../assets/images/hero/left/hero_hand_1.png";
import hand2 from "../assets/images/hero/right/hero_hand_2.png";
import { LogoIcon } from "../assets/svgs/exportIcons";
import {
  HeroPath1,
  HeroPath2,
  HomeimaginationHighlight,
} from "../assets/svgs/exportPaths";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const delay = 800;

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, delay);
  };

  return (
    <div className="home-container">
      <div className="header-container">
        <div className="header-wrapper">
          <div className="header-section">
            <LogoIcon />
            <div className="brandName">The Creator</div>
          </div>

          <div className="nav-section">
            <div className="nav" onClick={() => scrollToSection("partners")}>
              Partners
            </div>
            <div className="nav" onClick={() => scrollToSection("how-we-work")}>
              How we Work
            </div>
            <div className="nav" onClick={() => scrollToSection("review")}>
              Review
            </div>
            <div className="nav" onClick={() => scrollToSection("charity")}>
              Charity
            </div>
          </div>

          <div className="join-section button">Join The Creator</div>

          <div
            className={`hamburger ${menuOpen && "open"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="line"></div>
            <div className="line"></div>
          </div>

          <div className={`handburger-option ${menuOpen && "open"}`}>
            <div className="nav" onClick={() => scrollToSection("partners")}>
              Partners
            </div>
            <div className="nav" onClick={() => scrollToSection("how-we-work")}>
              How we work
            </div>
            <div className="nav" onClick={() => scrollToSection("review")}>
              Review
            </div>
            <div className="sales" onClick={() => scrollToSection("charity")}>
              charity
            </div>
            <div
              className="sales button"
              onClick={() => scrollToSection("join")}
            >
              Join the creator
            </div>
          </div>
        </div>
      </div>
      <div className="home-wrapper">
        <div className="bg-wrapper">
          <div className="left">
            <img src={hand1} alt="" />
            <div className="path">
              <HeroPath1 />
            </div>
          </div>
          <div className="right">
            <img src={hand2} alt="" />
            <div className="path">
              <HeroPath2 />
            </div>
          </div>
        </div>
        <div className="home-content">
          <div className="hero">
            Spark your brand's
            <br />
            <span className="highlight">
              <span className="messgae">imaginative</span>
              <div className="svg">
                <HomeimaginationHighlight />
              </div>
            </span>
            flair <br /> with us
          </div>

          <div className="message">
            Our team combines strategy, design, and technology to breathe life
            into your brand. Collaborate with us to leave a lasting impression
            on your audience.{" "}
          </div>

          <div className="join-wrapper" id="join">
            <input
              type="email"
              autoFocus
              name=""
              id=""
              placeholder="Enter your Email"
            />
            <div className="button">Join</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
