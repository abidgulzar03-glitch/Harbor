import { useEffect, useRef, useState } from "react";
import "./TheLoop.css";
import HowItWorks from "./WorkflowSection";

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 8L12 3 3 8v8l9 5 9-5V8z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v8" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <line x1="11" y1="18" x2="13" y2="18" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function DocIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  );
}

function CalendarPlayIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <polygon
        points="10 13.5 15 16 10 18.5"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function LockIcon() {
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
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function DownloadIcon() {
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
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function AlertIcon() {
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
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

const stats = [
  {
    value: "8",
    title: "Steps, in order",
    sub: "Arrival notice to cash",
  },
  {
    value: "2",
    title: "Hard blocks",
    sub: "Carrier compliance · customer credit",
  },
  {
    value: "30",
    title: "Modules",
    sub: "Five sidebar sections",
  },
  {
    value: "1",
    title: "Times you type the box number",
    sub: "And never again",
  },
];

const features = [
  {
    title: "The load board",
    description: "Container, lane, weight, dates.",
    subFeatures: ["Container", "Lane", "Weight", "Dates"],
  },
  {
    title: "The spreadsheet",
    description: "The same box, with the rate beside it.",
    subFeatures: ["Box number", "Rate"],
  },
  {
    title: "The invoice",
    description: "Typed from the sheet, or from memory.",
    subFeatures: ["From sheet", "From memory"],
  },
  {
    title: "The statement",
    description: "Assembled at month end from all three.",
    subFeatures: ["Load", "Rate", "Invoice"],
  },
];

const platformFeatures = [
  {
    icon: <BoxIcon />,
    title: "Arrival notice",
    description:
      "One booking creates 3 shipment loads automatically. Every container inherits the booking reference and LFD date.",
    active: true,
  },
  {
    icon: <ShieldCheckIcon />,
    title: "Credit check · Step 06",
    description:
      "Compare credit limit, unpaid invoices, and in-flight exposure in real time. Orders exceeding available headroom are blocked for approval.",
    active: true,
  },
  {
    icon: <PhoneIcon />,
    title: "Mobile app",
    description:
      "Review containers, approve bookings, and manage freight from anywhere.",
    active: false,
  },
];

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

const demoSteps = [
  {
    key: "pre-call",
    icon: <DocIcon />,
    accent: "blue",
    label: "Pre-call",
    caption: "You send one container number and one invoice before the call.",
    card: {
      title: "Send details before the call",
      fields: [
        { label: "Container number", value: "CONT-78421" },
        { label: "Invoice", value: "INV-009876" },
      ],
      cta: "Send to OceanGate",
    },
  },
  {
    key: "live-load",
    icon: <CalendarPlayIcon />,
    accent: "purple",
    label: "Live load",
    caption:
      "We load them in live — your lane, your customer, your accessorials.",
    card: {
      title: "Live load in progress",
      badge: "Live",
      rows: [
        { label: "Lane", value: "IAH → DAL", check: false },
        { label: "Customer", value: "Acme Brands", check: true },
        {
          label: "Accessorials",
          value: "Chassis / Genset / Triaxle",
          check: true,
        },
      ],
      progressLabel: "Loading your real data...",
      progress: 68,
    },
  },
  {
    key: "run-gates",
    icon: <ShieldCheckIcon />,
    accent: "teal",
    label: "Run the gates",
    caption:
      "We run the gates against a carrier you choose, and show you what refuses.",
    card: {
      title: "Carrier check: Horizon Logistics",
      checks: [
        { name: "Carrier Profile", result: "Passed" },
        { name: "Insurance", result: "Passed" },
        { name: "Safety Score", result: "Refused" },
        { name: "Service Lane", result: "Passed" },
        { name: "Equipment", result: "Refused" },
      ],
      warning: "2 checks refused",
    },
  },
  {
    key: "paperwork",
    icon: <FolderIcon />,
    accent: "orange",
    label: "Keep the paperwork",
    caption: "You keep the generated paperwork, whether or not you buy.",
    card: {
      title: "Generated paperwork",
      files: [
        "Container Inspection Report.pdf",
        "Load Confirmation.pdf",
        "Invoice & Accessorials.pdf",
      ],
      footer: "Yours to keep.",
    },
  },
];

function TheLoop() {
  const platformRef = useRef(null);
  const [platformInView, setPlatformInView] = useState(false);
  const [activeModule, setActiveModule] = useState(2); // Operations by default

  useEffect(() => {
    const node = platformRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlatformInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (window.innerWidth > 768) return;

    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % moduleCards.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="the-loop">
      {/* ========================================
          HERO SECTION
      ======================================== */}
      <section className="loop-hero">
        <div className="loop-hero-badge">
          <span className="loop-hero-badge-icon">
            <CheckIcon />
          </span>
          <span>The platform</span>
        </div>

        <h1 className="loop-hero-title">
          The closed
          <br />
          loop, end to end
        </h1>

        <p className="loop-hero-subtitle">
          A load is entered once. Everything after it is the
          <br />
          system's job.
        </p>

        <div className="loop-hero-actions">
          <a href="#demo" className="loop-hero-btn-solid">
            Book a demo
          </a>
          <a href="#why" className="loop-hero-link">
            Why we built it <span className="arrow">→</span>
          </a>
        </div>

        <div className="loop-hero-divider" />

        <div className="loop-hero-stats">
          {stats.map((stat) => (
            <div className="loop-hero-stat" key={stat.title}>
              <div className="loop-hero-stat-value">{stat.value}</div>
              <div className="loop-hero-stat-title">{stat.title}</div>
              <div className="loop-hero-stat-sub">{stat.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          PROBLEM SECTION
      ======================================== */}
      <section className="scheduling-section">
        <div className="scheduling-container">
          {/* LEFT CONTENT */}
          <div className="scheduling-left">
            <div className="scheduling-sticky">
              <p className="scheduling-label">The problem</p>

              <h2 className="scheduling-heading">
                Most brokerages key the same
                <br />
                container four times
              </h2>
            </div>

            <div className="scheduling-features">
              {features.map((feature, i) => (
                <div className="scheduling-feature" key={i}>
                  <div className="feature-content">
                    <h3 className="feature-title">{feature.title}</h3>

                    <p className="feature-desc">{feature.description}</p>

                    {feature.subFeatures && feature.subFeatures.length > 0 && (
                      <div className="feature-subfeatures">
                        {feature.subFeatures.map((item, index) => (
                          <div className="sub-feature" key={index}>
                            <span className="sub-feature-dot"></span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="scheduling-right">
            <div className="calendar-card">
              <img
                src="/Theloop-img-1.jpg"
                alt="The Loop platform"
                className="scheduling-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS SECTION
      ======================================== */}
      <section className="how-it-works-section">
        <p className="how-it-works-label">The sequence</p>
        <h2 className="how-it-works-heading">
          Eight steps.
          <br />
          Two of them refuse.
        </h2>
        <HowItWorks />
      </section>

      {/* ========================================
          PLATFORM / MANAGE SECTION
      ======================================== */}
      <section
        className={`platform-section${
          platformInView ? " platform-in-view" : ""
        }`}
        ref={platformRef}
      >
        <div className="platform-container">
          {/* LEFT CONTENT */}
          <div className="platform-left">
            <div className="platform-sticky">
              <h2 className="platform-heading platform-animate">
                Manage every container
                <br />
                wherever your logistics work happens
              </h2>
            </div>

            <div className="platform-features">
              {platformFeatures.map((feature, i) => (
                <div
                  className={`platform-feature platform-animate${
                    feature.active ? "" : " platform-feature-muted"
                  }`}
                  style={{ transitionDelay: `${120 + i * 90}ms` }}
                  key={feature.title}
                >
                  <div className="platform-feature-icon">{feature.icon}</div>
                  <div className="platform-feature-content">
                    <h3 className="platform-feature-title">{feature.title}</h3>
                    <p className="platform-feature-desc">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="platform-right">
            <div
              className="platform-card-group platform-animate"
              style={{ transitionDelay: "160ms" }}
            >
              {/* ARRIVAL NOTICE CARD */}
              <div className="platform-card">
                <div className="platform-card-header">
                  <span className="platform-card-title">Arrival notice</span>
                  <span className="platform-card-tag">AN-0142</span>
                </div>

                <div className="platform-card-rows">
                  <div className="platform-card-row">
                    <span className="platform-row-label">Shipping line</span>
                    <span className="platform-row-value">MAERSK</span>
                  </div>
                  <div className="platform-card-row">
                    <span className="platform-row-label">Vessel / voyage</span>
                    <span className="platform-row-value">
                      KENSINGTON / 214E
                    </span>
                  </div>
                  <div className="platform-card-row">
                    <span className="platform-row-label">Booking</span>
                    <span className="platform-row-value">MAEU 7741903</span>
                  </div>
                </div>

                <div className="platform-card-divider" />

                <div className="platform-container-list">
                  <div className="platform-container-row">
                    <span className="platform-container-number">
                      MSMU 461 5308
                    </span>
                    <span className="platform-pill platform-pill-amber">
                      LFD 12-SEP-26
                    </span>
                  </div>
                  <div className="platform-container-row">
                    <span className="platform-container-number">
                      TCLU 772 9140
                    </span>
                    <span className="platform-pill platform-pill-blue">
                      LFD 14-SEP-26
                    </span>
                  </div>
                  <div className="platform-container-row">
                    <span className="platform-container-number">
                      MSDU 318 4472
                    </span>
                    <span className="platform-pill platform-pill-blue">
                      LFD 14-SEP-26
                    </span>
                  </div>
                </div>

                <div className="platform-callout platform-callout-blue">
                  <p className="platform-callout-title">→ Creates 3 loads</p>
                  <p className="platform-callout-desc">
                    Each inherits the booking reference.
                  </p>
                </div>

                <p className="platform-card-caption">
                  One notice · three containers · one booking
                </p>
              </div>

              {/* CREDIT CHECK CARD */}
              <div className="platform-card">
                <div className="platform-card-header">
                  <span className="platform-card-title">
                    Credit check · step 06
                  </span>
                  <span className="platform-card-tag platform-card-tag-muted">
                    Gulf Coast Imports
                  </span>
                </div>

                <div className="platform-card-rows">
                  <div className="platform-card-row">
                    <span className="platform-row-label">Terms</span>
                    <span className="platform-pill platform-pill-green">
                      NET 30
                    </span>
                  </div>
                  <div className="platform-card-row">
                    <span className="platform-row-label">Credit limit</span>
                    <span className="platform-row-value">$ 50,000.00</span>
                  </div>
                  <div className="platform-card-row">
                    <span className="platform-row-label">Invoiced, unpaid</span>
                    <span className="platform-pill platform-pill-amber">
                      $ 26,741.25
                    </span>
                  </div>
                  <div className="platform-card-row">
                    <span className="platform-row-label">In flight</span>
                    <span className="platform-pill platform-pill-amber">
                      $ 24,880.00
                    </span>
                  </div>
                </div>

                <div className="platform-headroom">
                  <span className="platform-headroom-label">Headroom</span>
                  <span className="platform-headroom-value">− $1,621.25</span>
                </div>

                <div className="platform-callout platform-callout-red">
                  <p className="platform-callout-title">
                    × Blocked for credit review
                  </p>
                  <p className="platform-callout-desc">
                    An approver decides in writing, and it is audited.
                  </p>
                </div>

                <p className="platform-card-caption">
                  Exposure counts the loads still in the air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          MODULE SHOWCASE
      ======================================== */}
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
              <h3>{moduleCards[activeModule].stat}</h3>
              <blockquote>“{moduleCards[activeModule].quote}”</blockquote>

              <div className="module-suite">
                <span className="module-suite-label">
                  {moduleCards[activeModule].author.toUpperCase()}
                </span>
                <div className="module-suite-pill">
                  {moduleCards[activeModule].items.slice(0, 3).join(" · ")}
                </div>
              </div>
            </div>

            <div className="module-right">
              <h4>{moduleCards[activeModule].title}</h4>
              <div className="module-chips">
                {moduleCards[activeModule].items.map((item) => (
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
                className={`module-mini ${
                  activeModule === i + 3 ? "active" : ""
                }`}
                onClick={() => {
                  const y = window.scrollY;
                  setActiveModule(i + 3);

                  requestAnimationFrame(() => {
                    window.scrollTo(0, y);
                  });
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
          {moduleCards.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`module-dot${activeModule === i ? " active" : ""}`}
              onClick={() => setActiveModule(i)}
              aria-label={`Show ${moduleCards[i].title}`}
            >
              <span />
            </button>
          ))}
        </div>
      </section>

      {/* ========================================
          DEMO EXPERIENCE SECTION
      ======================================== */}
      {/* ========================================
    DEMO EXPERIENCE SECTION
======================================== */}
      <section className="demo-experience-section">
        <p className="demo-exp-label">THE DEMO EXPERIENCE</p>

        <h2 className="demo-exp-heading">
          See it against your
          <br />
          own containers.
        </h2>

        <p className="demo-exp-subtitle">
          Forty minutes. No slides. Bring one live container and one messy
          invoice.
        </p>

        <div className="demo-exp-grid">
          {demoSteps.map((step) => (
            <div className="demo-exp-col" key={step.key}>
              {/* Icon + Title */}
              <div className="demo-exp-header">
                <div className={`demo-exp-icon demo-exp-icon-${step.accent}`}>
                  {step.icon}
                </div>
                <h3 className="demo-exp-col-label">{step.label}</h3>
              </div>

              {/* Card */}
              <div className={`demo-exp-card demo-exp-card-${step.accent}`}>
                <div className="demo-exp-card-header">
                  <span className="demo-exp-card-title">{step.card.title}</span>

                  {step.card.badge && (
                    <span className="demo-exp-badge-live">
                      {step.card.badge}
                    </span>
                  )}
                </div>

                {/* Pre-call */}
                {step.card.fields && (
                  <div className="demo-exp-fields">
                    {step.card.fields.map((field) => (
                      <div className="demo-exp-field" key={field.label}>
                        <span className="demo-exp-field-label">
                          {field.label}
                        </span>
                        <span className="demo-exp-field-value">
                          {field.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {step.card.cta && (
                  <button className="demo-exp-cta-btn" type="button">
                    {step.card.cta} <span>→</span>
                  </button>
                )}

                {/* Live Load */}
                {step.card.rows && (
                  <div className="demo-exp-rows">
                    {step.card.rows.map((row) => (
                      <div className="demo-exp-row" key={row.label}>
                        <div className="demo-exp-row-text">
                          <span className="demo-exp-row-label">
                            {row.label}
                          </span>
                          <span className="demo-exp-row-value">
                            {row.value}
                          </span>
                        </div>

                        {row.check && (
                          <span className="demo-exp-check">
                            <CheckIcon />
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Progress */}
                {step.card.progress !== undefined && (
                  <div className="demo-exp-progress-wrap">
                    <span className="demo-exp-progress-label">
                      {step.card.progressLabel}
                    </span>

                    <div className="demo-exp-progress-bar">
                      <div
                        className="demo-exp-progress-fill"
                        style={{ width: `${step.card.progress}%` }}
                      />
                    </div>

                    <span className="demo-exp-progress-pct">
                      {step.card.progress}%
                    </span>
                  </div>
                )}

                {/* Gate Checks */}
                {step.card.checks && (
                  <div className="demo-exp-checks">
                    <div className="demo-exp-checks-header">
                      <span>Check</span>
                      <span>Result</span>
                    </div>

                    {step.card.checks.map((check) => (
                      <div className="demo-exp-checks-row" key={check.name}>
                        <span>{check.name}</span>

                        <span
                          className={`demo-exp-result ${
                            check.result === "Passed"
                              ? "demo-exp-result-pass"
                              : "demo-exp-result-fail"
                          }`}
                        >
                          {check.result}
                        </span>
                      </div>
                    ))}

                    {step.card.warning && (
                      <div className="demo-exp-warning">
                        <AlertIcon />
                        <span>{step.card.warning}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Files */}
                {step.card.files && (
                  <div className="demo-exp-files">
                    {step.card.files.map((file) => (
                      <div className="demo-exp-file" key={file}>
                        <span className="demo-exp-file-icon">PDF</span>
                        <span className="demo-exp-file-name">{file}</span>
                        <DownloadIcon />
                      </div>
                    ))}
                  </div>
                )}

                {step.card.footer && (
                  <div className="demo-exp-footer-pill">
                    <LockIcon />
                    <span>{step.card.footer}</span>
                  </div>
                )}
              </div>

              <p className="demo-exp-caption">{step.caption}</p>
            </div>
          ))}
        </div>

        <div className="demo-exp-actions">
          <a href="#demo" className="demo-exp-btn-solid">
            Book a demo
          </a>

          <a href="#pricing" className="demo-exp-link">
            See pricing <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default TheLoop;
