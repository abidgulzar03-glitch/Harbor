import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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

/* ---- Mega-menu item icons ---- */

function LoopIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 2 21 6 17 10" />
      <path d="M3 6h18" />
      <path d="M7 22 3 18 7 14" />
      <path d="M21 18H3" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8" />
      <path d="M8 12h8" />
      <path d="M8 16h5" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v20" />
      <path d="M17 6.5c0-1.9-2.2-3.5-5-3.5s-5 1.4-5 3.2c0 1.9 1.9 2.6 5 3.3s5 1.4 5 3.3c0 1.8-2.2 3.2-5 3.2s-5-1.6-5-3.5" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="9.5" y="3" width="6" height="6" rx="1" />
      <rect x="16" y="3" width="5" height="6" rx="1" />

      <rect x="3" y="10" width="6" height="6" rx="1" />
      <rect x="9.5" y="10" width="6" height="6" rx="1" />
      <rect x="16" y="10" width="5" height="6" rx="1" />

      <rect x="3" y="17" width="6" height="4" rx="1" />
      <rect x="9.5" y="17" width="6" height="4" rx="1" />
      <rect x="16" y="17" width="5" height="4" rx="1" />
    </svg>
  );
}

/* ---- Platform menu ---- */

const platformItems = [
  {
    href: "/the-loops",
    title: "The loop",
    sub: "Arrival notice to cash, end to end.",
    icon: <LoopIcon />,
    isRoute: true,
  },
  {
    href: "#operations",
    title: "Operations",
    sub: "The board and the eight exceptions.",
    icon: <OperationsIcon />,
    isRoute: false,
  },
  {
    href: "#compliance",
    title: "Compliance",
    sub: "Authority, insurance, W9, signature.",
    icon: <ComplianceIcon />,
    isRoute: false,
  },
  {
    href: "#finance",
    title: "Finance",
    sub: "Charges, aging, the advance ledger.",
    icon: <FinanceIcon />,
    isRoute: false,
  },
  {
    href: "#portals",
    title: "Portals",
    sub: "Self-serve outside, staff approve inside.",
    icon: <PortalsIcon />,
    isRoute: false,
  },
  {
    href: "#reports",
    title: "Reports",
    sub: "The five questions, answered daily.",
    icon: <ReportsIcon />,
    isRoute: false,
  },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showFloating, setShowFloating] = useState(false);

  const navRef = useRef(null);

  /* ---- Floating navbar ---- */

  useEffect(() => {
    const section = document.querySelector(".hero-2");

    if (!section) return;

    const handleScroll = () => {
      setShowFloating(section.getBoundingClientRect().top <= 0);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  /* ---- Close dropdown outside ---- */

  useEffect(() => {
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

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenMenu(null);
  };

  /* ---- Platform item renderer ---- */

  const renderPlatformItem = (item) => {
    const content = (
      <>
        <span className="dropdown-icon">{item.icon}</span>

        <span className="dropdown-item-text">
          <span className="dropdown-item-title">{item.title}</span>

          <span className="dropdown-item-sub">{item.sub}</span>
        </span>
      </>
    );

    if (item.isRoute) {
      return (
        <Link
          key={item.href}
          to={item.href}
          className="dropdown-item"
          onClick={() => setOpenMenu(null)}
        >
          {content}
        </Link>
      );
    }

    return (
      <a
        key={item.href}
        href={item.href}
        className="dropdown-item"
        onClick={() => setOpenMenu(null)}
      >
        {content}
      </a>
    );
  };

  /* ---- Navbar content ---- */

  const NavContent = (
    <div className="navbar-container" ref={navRef}>
      {/* Logo */}

      <Link to="/" className="navbar-logo" onClick={closeMobile}>
        <HarborIcon />
        <span>Harbor</span>
      </Link>

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
            <div className="navbar-dropdown-mega">
              {platformItems.map(renderPlatformItem)}
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

      {/* Actions */}

      <div className="navbar-actions">
        <a href="#login" className="login-btn">
          Log In
        </a>

        <a href="#demo" className="nav-demo-btn">
          Book a Demo
        </a>
      </div>

      {/* Mobile Button */}

      <button
        type="button"
        className={`mobile-menu-btn ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle navigation"
        aria-expanded={mobileOpen}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );

  return (
    <>
      {/* Main Navbar */}

      <header className="navbar-static">{NavContent}</header>

      {/* Floating Navbar */}

      {showFloating && (
        <header className="navbar-floating">{NavContent}</header>
      )}

      {/* Mobile Menu */}

      <div className={`mobile-navbar ${mobileOpen ? "active" : ""}`}>
        <button
          type="button"
          className="mobile-nav-dropdown-btn"
          onClick={() => toggleMenu("mobilePlatform")}
        >
          Platform
          <ChevronIcon open={openMenu === "mobilePlatform"} />
        </button>

        {openMenu === "mobilePlatform" && (
          <div className="mobile-dropdown">
            {platformItems.map((item) => {
              const content = (
                <>
                  <span className="dropdown-icon">{item.icon}</span>

                  <span className="dropdown-item-text">
                    <span className="dropdown-item-title">{item.title}</span>

                    <span className="dropdown-item-sub">{item.sub}</span>
                  </span>
                </>
              );

              if (item.isRoute) {
                return (
                  <Link key={item.href} to={item.href} onClick={closeMobile}>
                    {content}
                  </Link>
                );
              }

              return (
                <a key={item.href} href={item.href} onClick={closeMobile}>
                  {content}
                </a>
              );
            })}
          </div>
        )}

        <a
          href="#integrations"
          className="mobile-nav-link"
          onClick={closeMobile}
        >
          Integrations
        </a>

        <a href="#pricing" className="mobile-nav-link" onClick={closeMobile}>
          Pricing
        </a>

        <a href="#resources" className="mobile-nav-link" onClick={closeMobile}>
          Resources
        </a>

        <div className="mobile-actions">
          <a href="#login" className="login-btn" onClick={closeMobile}>
            Log In
          </a>

          <a href="#demo" className="nav-demo-btn" onClick={closeMobile}>
            Book a Demo
          </a>
        </div>
      </div>
    </>
  );
}
