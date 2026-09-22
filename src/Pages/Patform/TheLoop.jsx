import { useEffect, useRef, useState } from "react";
import "./TheLoop.css";
// import HowItWorks from "./WorkflowSection";

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

function TheLoop() {
  const platformRef = useRef(null);
  const [platformInView, setPlatformInView] = useState(false);

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

                    {/* SUB FEATURES */}
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
        {/* <HowItWorks /> */}
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
    </div>
  );
}

export default TheLoop;
