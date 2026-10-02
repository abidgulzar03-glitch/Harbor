import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
/* ========================================================= ICONS ========================================================= */ function ChevronIcon({
  open,
}) {
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
      {" "}
      <polyline points="6 9 12 15 18 9" />{" "}
    </svg>
  );
}
function HarborIcon() {
  return (
    <div className="calendly-icon">
      {" "}
      <span>H</span>{" "}
    </div>
  );
}
function LoopIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {" "}
      <circle cx="12" cy="12" r="8" /> <circle cx="12" cy="12" r="3" />{" "}
    </svg>
  );
}
function ComplianceIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
    >
      {" "}
      <path d="M20 6 9 17l-5-5" />{" "}
    </svg>
  );
}
function OperationsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {" "}
      <rect x="4" y="3" width="16" height="18" rx="2" />{" "}
      <path d="M8 8h8M8 12h8M8 16h5" />{" "}
    </svg>
  );
}
function FinanceIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {" "}
      <path d="M12 2v20" />{" "}
      <path d="M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.4-5 3.2c0 1.9 1.9 2.6 5 3.3s5 1.4 5 3.3c0 1.8-2.2 3.2-5 3.2s-5-1.6-5-3.5" />{" "}
    </svg>
  );
}
function PortalsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {" "}
      <path d="M17 2 21 6 17 10" /> <path d="M3 6h18" />{" "}
      <path d="M7 22 3 18 7 14" /> <path d="M21 18H3" />{" "}
    </svg>
  );
}
function ReportsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      {" "}
      <rect x="3" y="3" width="6" height="6" rx="1" />{" "}
      <rect x="9.5" y="3" width="6" height="6" rx="1" />{" "}
      <rect x="16" y="3" width="5" height="6" rx="1" />{" "}
      <rect x="3" y="10" width="6" height="6" rx="1" />{" "}
      <rect x="9.5" y="10" width="6" height="6" rx="1" />{" "}
      <rect x="16" y="10" width="5" height="6" rx="1" />{" "}
      <rect x="3" y="17" width="6" height="4" rx="1" />{" "}
      <rect x="9.5" y="17" width="6" height="4" rx="1" />{" "}
      <rect x="16" y="17" width="5" height="4" rx="1" />{" "}
    </svg>
  );
}
/* ========================================================= PLATFORM MENU ========================================================= */ const platformItems =
  [
    {
      href: "/the-loops",
      title: "The Loop",
      sub: "Arrival notice to cash, end to end.",
      icon: <LoopIcon />,
    },
    {
      href: "/operations",
      title: "Operations",
      sub: "The board and the eight exceptions.",
      icon: <OperationsIcon />,
    },
    {
      href: "/compliance",
      title: "Compliance",
      sub: "Authority, insurance, W9, signature.",
      icon: <ComplianceIcon />,
    },
    {
      href: "/finance",
      title: "Finance",
      sub: "Charges, aging, the advance ledger.",
      icon: <FinanceIcon />,
    },
    {
      href: "/portals",
      title: "Portals",
      sub: "Self-serve outside, staff approve inside.",
      icon: <PortalsIcon />,
    },
    {
      href: "/reports",
      title: "Reports",
      sub: "The five questions, answered daily.",
      icon: <ReportsIcon />,
    },
  ];
/* ========================================================= NAVBAR ========================================================= */ export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const navRef = useRef(null);
  /* ======================================================= FLOATING NAVBAR ======================================================= */ useEffect(() => {
    const section = document.querySelector(".hero-2");
    const handleScroll = () => {
      /* Mobile navbar is already fixed/floating. Do not render a second floating navbar on mobile. */ if (
        window.innerWidth <= 800
      ) {
        setShowFloating(false);
        return;
      }
      if (section) {
        setShowFloating(section.getBoundingClientRect().top <= 0);
      } else {
        /* Pages without .hero-2 still get the floating navbar after scrolling. */ setShowFloating(
          window.scrollY > 80,
        );
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);
  /* ======================================================= CLOSE DROPDOWN WHEN CLICKING OUTSIDE ======================================================= */ useEffect(() => {
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  /* ======================================================= MENU TOGGLE ======================================================= */ const toggleMenu =
    (menu) => {
      setOpenMenu((prev) => (prev === menu ? null : menu));
    };
  /* ======================================================= CLOSE EVERYTHING ======================================================= */ const closeMobile =
    () => {
      setMobileOpen(false);
      setOpenMenu(null);
    };
  /* ======================================================= PLATFORM ITEM ======================================================= */ const renderPlatformItem =
    (item) => {
      return (
        <Link
          key={item.href}
          to={item.href}
          className="dropdown-item"
          onClick={closeMobile}
        >
          {" "}
          <span className="dropdown-icon"> {item.icon} </span>{" "}
          <span className="dropdown-item-text">
            {" "}
            <span className="dropdown-item-title"> {item.title} </span>{" "}
            <span className="dropdown-item-sub"> {item.sub} </span>{" "}
          </span>{" "}
        </Link>
      );
    };
  /* ======================================================= NAV CONTENT ======================================================= */ const NavContent =
    (
      <div className="navbar-container" ref={navRef}>
        {" "}
        {/* LOGO */}{" "}
        <Link to="/" className="navbar-logo" onClick={closeMobile}>
          {" "}
          <HarborIcon /> <span>Harbor</span>{" "}
        </Link>{" "}
        {/* DESKTOP NAV LINKS */}{" "}
        <nav className="navbar-links">
          {" "}
          {/* PLATFORM */}{" "}
          <div className="navbar-item">
            {" "}
            <button
              type="button"
              className={`navbar-link navbar-dropdown-btn ${openMenu === "platform" ? "active" : ""}`}
              onClick={() => toggleMenu("platform")}
            >
              {" "}
              Platform <ChevronIcon open={openMenu === "platform"} />{" "}
            </button>{" "}
            {openMenu === "platform" && (
              <div className="navbar-dropdown-mega">
                {" "}
                {platformItems.map(renderPlatformItem)}{" "}
              </div>
            )}{" "}
          </div>{" "}
          {/* INTEGRATIONS */}{" "}
          <Link
            to="/integrations"
            className="navbar-link"
            onClick={closeMobile}
          >
            {" "}
            Integrations{" "}
          </Link>{" "}
          {/* PRICING */}{" "}
          <a href="#pricing" className="navbar-link" onClick={closeMobile}>
            {" "}
            Pricing{" "}
          </a>{" "}
          {/* RESOURCES */}{" "}
          <a href="#resources" className="navbar-link" onClick={closeMobile}>
            {" "}
            Resources{" "}
          </a>{" "}
        </nav>{" "}
        {/* DESKTOP ACTIONS */}{" "}
        <div className="navbar-actions">
          {" "}
          <a href="#login" className="login-btn" onClick={closeMobile}>
            {" "}
            Log In{" "}
          </a>{" "}
          <a href="#demo" className="nav-demo-btn" onClick={closeMobile}>
            {" "}
            Book a Demo{" "}
          </a>{" "}
        </div>{" "}
        {/* MOBILE MENU BUTTON */}{" "}
        <button
          type="button"
          className={`mobile-menu-btn ${mobileOpen ? "active" : ""}`}
          onClick={() => {
            setMobileOpen((prev) => !prev);
            setOpenMenu(null);
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {" "}
          <span /> <span /> <span />{" "}
        </button>{" "}
      </div>
    );
  /* ======================================================= RETURN ======================================================= */ return (
    <>
      {" "}
      {/* STATIC NAVBAR */}{" "}
      <header className="navbar-static"> {NavContent} </header>{" "}
      {/* DESKTOP FLOATING NAVBAR */}{" "}
      {showFloating && (
        <header className="navbar-floating"> {NavContent} </header>
      )}{" "}
      {/* MOBILE NAVIGATION */}{" "}
      <div className={`mobile-navbar ${mobileOpen ? "active" : ""}`}>
        {" "}
        {/* BACK TO HOME */}{" "}
        <Link to="/" className="mobile-home-btn" onClick={closeMobile}>
          {" "}
          <span className="mobile-home-arrow"> ← </span>{" "}
          <span>Back to Home</span>{" "}
        </Link>{" "}
        {/* PLATFORM */}{" "}
        <button
          type="button"
          className="mobile-nav-dropdown-btn"
          onClick={() => toggleMenu("mobilePlatform")}
        >
          {" "}
          <span>Platform</span>{" "}
          <ChevronIcon open={openMenu === "mobilePlatform"} />{" "}
        </button>{" "}
        {openMenu === "mobilePlatform" && (
          <div className="mobile-dropdown">
            {" "}
            {platformItems.map(renderPlatformItem)}{" "}
          </div>
        )}{" "}
        {/* INTEGRATIONS */}{" "}
        <Link
          to="/integrations"
          className="mobile-nav-link"
          onClick={closeMobile}
        >
          {" "}
          Integrations{" "}
        </Link>{" "}
        {/* PRICING */}{" "}
        <a href="#pricing" className="mobile-nav-link" onClick={closeMobile}>
          {" "}
          Pricing{" "}
        </a>{" "}
        {/* RESOURCES */}{" "}
        <a href="#resources" className="mobile-nav-link" onClick={closeMobile}>
          {" "}
          Resources{" "}
        </a>{" "}
        {/* MOBILE ACTIONS */}{" "}
        <div className="mobile-actions">
          {" "}
          <a href="#login" className="login-btn" onClick={closeMobile}>
            {" "}
            Log In{" "}
          </a>{" "}
          <a href="#demo" className="nav-demo-btn" onClick={closeMobile}>
            {" "}
            Book a Demo{" "}
          </a>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}
