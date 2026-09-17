import { useState } from "react";
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

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <HarborIcon />
          <span>Harbor</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          <div className="navbar-item">
            <button
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
                <a href="#">The Loops</a>
                <a href="#">Compliance</a>
                <a href="#">Portals</a>
                <a href="#">Operations</a>
                <a href="#">Finance</a>
                <a href="#">Reports</a>
              </div>
            )}
          </div>

          <a href="#" className="navbar-link">
            Integrations
          </a>
          <a href="#" className="navbar-link">
            Pricing
          </a>
          <a href="#" className="navbar-link">
            Security
          </a>
          <a href="#" className="navbar-link">
            Resources
          </a>
        </nav>

        {/* Right Side */}
        <div className="navbar-actions">
          <a href="#" className="login-btn">
            Log In
          </a>

          <a href="#" className="nav-demo-btn">
            Book a Demo
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className={`mobile-menu-btn ${mobileOpen ? "active" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-navbar ${mobileOpen ? "active" : ""}`}>
        <button
          onClick={() => toggleMenu("mobile-platform")}
          className="mobile-nav-dropdown-btn"
        >
          Platform
          <ChevronIcon open={openMenu === "mobile-platform"} />
        </button>

        {openMenu === "mobile-platform" && (
          <div className="mobile-dropdown">
            <a href="#">The Loops</a>
            <a href="#">Compliance</a>
            <a href="#">Portals</a>
            <a href="#">Operations</a>
            <a href="#">Finance</a>
            <a href="#">Reports</a>
          </div>
        )}

        <a href="#" className="mobile-nav-link">
          Integrations
        </a>
        <a href="#" className="mobile-nav-link">
          Pricing
        </a>
        <a href="#" className="mobile-nav-link">
          Security
        </a>
        <a href="#" className="mobile-nav-link">
          Resources
        </a>

        <div className="mobile-actions">
          <a href="#" className="login-btn">
            Log In
          </a>

          <a href="#" className="nav-demo-btn">
            Book a Demo
          </a>
        </div>
      </div>
    </header>
  );
}
