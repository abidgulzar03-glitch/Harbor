import { useEffect, useRef, useState } from "react";
import "./PlatformSectionTheLoop.css";
import { BoxIcon, ShieldCheckIcon, PhoneIcon } from "./IconsTheLoop";

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

export default function PlatformSectionTheLoop() {
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
    <section
      className={`platform-section${platformInView ? " platform-in-view" : ""}`}
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
                  <p className="platform-feature-desc">{feature.description}</p>
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
                  <span className="platform-row-value">KENSINGTON / 214E</span>
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
  );
}
