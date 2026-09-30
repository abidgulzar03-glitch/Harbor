import { useEffect, useState } from "react";
import "./ModuleShowcaseTheLoop.css";
import {
  MonitorIcon,
  ListIcon,
  GearIcon,
  ChartIcon,
  LocationIcon,
  LinkIcon,
} from "./IconsTheLoop";

const moduleCards = [
  {
    title: "Workspace",
    icon: <MonitorIcon />,
    stat: "4 essential modules",
    quote: "Everything starts from one clean workspace.",
    author: "Dashboard · Load Board · Pipeline · Container 360",
    items: ["Dashboard", "Load Board", "Pipeline", "Container 360"],
  },
  {
    title: "Records",
    icon: <ListIcon />,
    stat: "4 record modules",
    quote: "Customers, carriers and approvals in one place.",
    author: "Records Management",
    items: ["Customers", "Carriers", "Approvals", "Credit Requests"],
  },
  {
    title: "Operations",
    icon: <GearIcon />,
    stat: "8 operational modules",
    quote: "Manage every shipment from booking to delivery.",
    author: "Operations Suite",
    items: [
      "Shipments board",
      "Tasks & exceptions",
      "Tracking",
      "Rate board",
      "Arrival notices",
      "Delivery orders",
      "Appointments",
      "Auto Pilot",
    ],
  },
  {
    title: "Finance",
    icon: <ChartIcon />,
    stat: "8 finance modules",
    quote: "Invoices, receivables and complete company P&L.",
    author: "Finance Suite",
    items: [
      "Invoices",
      "Receivables",
      "Payables",
      "Advance Ledger",
      "Debit & Credit Notes",
      "Commissions",
      "Operating Expenses",
      "Company P&L",
    ],
  },
  {
    title: "Administration",
    icon: <LocationIcon />,
    stat: "6 admin modules",
    quote: "Control users, reports and integrations effortlessly.",
    author: "Administration Panel",
    items: [
      "Reports",
      "Audit Log",
      "Users & Roles",
      "Company Profile",
      "Integrations",
      "Portal Control",
    ],
  },
  {
    title: "Platform",
    icon: <LinkIcon />,
    stat: "5 connected sections",
    quote:
      "Operations, Compliance, Finance, Portals and Reports stay connected.",
    author: "Entire Platform",
    items: ["Operations", "Compliance", "Finance", "Portals", "Reports"],
  },
];

export default function ModuleShowcaseTheLoop() {
  const [activeModule, setActiveModule] = useState(2); // Operations by default

  /* Mobile auto-rotate */
  useEffect(() => {
    if (window.innerWidth > 768) return;

    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % moduleCards.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const active = moduleCards[activeModule];

  return (
    <section className="module-showcase">
      <p className="module-label">EVERY MODULE</p>
      <h2 className="module-heading">
        Thirty modules, Five
        <br />
        sections of one sidebar
      </h2>
      <p className="module-subtitle">
        A section vanishes when a user has no module inside it.
      </p>

      <div className="module-layout">
        {/* LEFT SIDE */}
        <div className="module-side">
          {moduleCards.slice(0, 3).map((c, i) => (
            <button
              key={c.title}
              type="button"
              className={`module-mini ${activeModule === i ? "active" : ""}`}
              onMouseDown={(e) => e.preventDefault()}
              onTouchStart={(e) => e.preventDefault()}
              onClick={() => setActiveModule(i)}
              aria-pressed={activeModule === i}
            >
              <span className="module-mini-icon">{c.icon}</span>
              <span className="module-mini-label">{c.title}</span>
            </button>
          ))}
        </div>

        {/* CENTER CARD */}
        <div className="module-card">
          <div className="module-left">
            <h3>{active.stat}</h3>
            <blockquote>“{active.quote}”</blockquote>

            <div className="module-suite">
              <span className="module-suite-label">
                {active.author.toUpperCase()}
              </span>
              <div className="module-suite-pill">
                {active.items.slice(0, 3).join(" · ")}
              </div>
            </div>
          </div>

          <div className="module-right">
            <h4>{active.title}</h4>
            <div className="module-chips">
              {active.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="module-side">
          {moduleCards.slice(3, 6).map((c, i) => (
            <button
              key={c.title}
              type="button"
              className={`module-mini ${activeModule === i + 3 ? "active" : ""}`}
              onClick={() => {
                const y = window.scrollY;
                setActiveModule(i + 3);
                requestAnimationFrame(() => window.scrollTo(0, y));
              }}
              aria-pressed={activeModule === i + 3}
            >
              <span className="module-mini-icon">{c.icon}</span>
              <span className="module-mini-label">{c.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="module-dots">
        {moduleCards.map((c, i) => (
          <button
            key={c.title}
            type="button"
            className={`module-dot${activeModule === i ? " active" : ""}`}
            onClick={() => setActiveModule(i)}
            aria-label={`Show ${c.title}`}
          >
            <span />
          </button>
        ))}
      </div>
    </section>
  );
}
