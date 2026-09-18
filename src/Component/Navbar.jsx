import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function ChevronIcon({ open }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`chevron ${open ? "open" : ""}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function HarborIcon() {
  return (
    <div className="calendly-icon">
      <span>H</span>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setShowFloating(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const NavContent = (
    <div className="navbar-container" ref={navRef}>
      <a href="#home" className="navbar-logo">
        <HarborIcon />
        <span>Harbor</span>
      </a>

      {/* Desktop */}
      <nav className="navbar-links">
        <div className="navbar-item">
          <button
            type="button"
            className={`navbar-link navbar-dropdown-btn ${
              openMenu === "platform" ? "active" : ""
            }`}
            onClick={() => toggleMenu("platform")}
          >
            Platform
            <ChevronIcon open={openMenu === "platform"} />
          </button>

          {openMenu === "platform" && (
            <div className="navbar-dropdown">
              <a href="#loops">The Loops</a>
              <a href="#compliance">Compliance</a>
              <a href="#portals">Portals</a>
              <a href="#operations">Operations</a>
            </div>
          )}
        </div>

        <a href="#integrations" className="navbar-link">
          Integrations
        </a>
        <a href="#pricing" className="navbar-link">
          Pricing
        </a>
        <a href="#resources" className="navbar-link">
          Resources
        </a>
      </nav>

      <div className="navbar-actions">
        <a href="#login" className="login-btn">
          Log In
        </a>
        <a href="#demo" className="nav-demo-btn">
          Book a Demo
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        className={`mobile-menu-btn ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );

  return (
    <>
      <header className="navbar-static">{NavContent}</header>

      {showFloating && (
        <header className="navbar-floating">{NavContent}</header>
      )}

      {/* Mobile Menu */}
      <div className={`mobile-navbar ${mobileOpen ? "active" : ""}`}>
        <button
          className="mobile-nav-dropdown-btn"
          onClick={() => toggleMenu("mobilePlatform")}
        >
          Platform
          <ChevronIcon open={openMenu === "mobilePlatform"} />
        </button>

        {openMenu === "mobilePlatform" && (
          <div className="mobile-dropdown">
            <a href="#loops">The Loops</a>
            <a href="#compliance">Compliance</a>
            <a href="#portals">Portals</a>
            <a href="#operations">Operations</a>
          </div>
        )}

        <a href="#integrations" className="mobile-nav-link">
          Integrations
        </a>
        <a href="#pricing" className="mobile-nav-link">
          Pricing
        </a>
        <a href="#resources" className="mobile-nav-link">
          Resources
        </a>

        <div className="mobile-actions">
          <a href="#login" className="login-btn">
            Log In
          </a>
          <a href="#demo" className="nav-demo-btn">
            Book a Demo
          </a>
        </div>
      </div>
    </>
  );
}
