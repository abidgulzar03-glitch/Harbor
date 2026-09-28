import { useEffect, useRef, useState } from "react";
import "./TwoSide.css";

const features = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    side: "Customer portal",
    title: "Shipments",
    description: "Every container of theirs, its status, dates and stops.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    side: "Customer portal",
    title: "Search",
    description: "By container, booking, or their own internal reference.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    side: "Customer portal",
    title: "Tracking",
    description: "The same milestones your desk works off.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
    side: "Customer portal",
    title: "Wire details",
    description: "Remit-to and bank details from your company profile.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    side: "Customer portal",
    title: "Payment view",
    description: "Invoiced, paid, open.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    side: "Customer portal",
    title: "Statements",
    description: "Any date range, as a PDF on your letterhead.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    ),
    side: "Customer portal",
    title: "Documents",
    description: "PODs, invoices, delivery orders, the arrival notice.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="1" y="3" width="15" height="13" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    side: "Carrier portal",
    title: "Assigned loads",
    description: "The loads assigned to them. Not the board.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    side: "Carrier portal",
    title: "Search",
    description: "Their own loads, by container or load number.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    side: "Carrier portal",
    title: "Tracking updates",
    description: "Posted onto the same feed your desk reads.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    side: "Carrier portal",
    title: "POD upload",
    description: "From the phone at the dock, on the right load first time.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    side: "Carrier portal",
    title: "Invoice submission",
    description: "Against a completed load, into the approval queue.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    side: "Carrier portal",
    title: "Payment status",
    description: "Their terms, and the factoring redirect if there is one.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    side: "Carrier portal",
    title: "Confirmations",
    description: "Rate cons, carrier confirmations, delivery orders.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    side: "Carrier portal",
    title: "Appointments",
    description: "Pickup and delivery windows, acknowledged in one tap.",
  },
];

export default function TwoSide() {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveIndex(Number(entry.target.dataset.index));
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0,
      },
    );

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const active = features[activeIndex];
  const isCustomer = active.side === "Customer portal";

  return (
    <section className="cap-section">
      <div className="cap-left">
        <div className="cap-sticky-head">
          <p className="cap-eyebrow">Portal access</p>
          <h2 className="cap-headline">
            What each side gets,
            <br />
            and nothing beyond it
          </h2>
          <p className="cap-sub">
            Scope is applied where the query runs, so it is not a filter a
            crafted URL can step around.
          </p>
        </div>

        <div className="cap-features">
          {features.map((feature, index) => (
            <div
              key={`${feature.side}-${feature.title}`}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`cap-feature ${
                index === activeIndex ? "is-active" : ""
              }`}
            >
              <div className="cap-feature-side">{feature.side}</div>
              <div className="cap-feature-head">
                <span className="cap-feature-icon">{feature.icon}</span>
                <h3 className="cap-feature-title">{feature.title}</h3>
              </div>
              <p className="cap-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="cap-right">
        <div className="cap-sticky-card">
          <div className="cap-visual">
            {/* Side chip – switches with active feature */}
            <div
              className={`cap-chip ${
                isCustomer ? "cap-chip-customer" : "cap-chip-carrier"
              }`}
            >
              <span className="cap-chip-avatar"></span>
              {isCustomer ? "Customer" : "Carrier"}
            </div>

            {/* Dynamic feature card */}
            <div className="cap-card" key={activeIndex}>
              <div className="cap-card-icon">{active.icon}</div>
              <p className="cap-card-side">{active.side}</p>
              <p className="cap-card-title">{active.title}</p>
              <p className="cap-card-desc">{active.description}</p>

              <div className="cap-card-footer">
                <span className="cap-card-label">Scoped access</span>
                <span className="cap-card-badge">Only theirs</span>
              </div>

              <div className="cap-bars">
                <div className="cap-bar" style={{ width: "92%" }}></div>
                <div className="cap-bar" style={{ width: "70%" }}></div>
                <div className="cap-bar" style={{ width: "55%" }}></div>
              </div>
            </div>

            <div className="cap-bubble">Nothing beyond their scope</div>
          </div>
        </div>
      </div>
    </section>
  );
}
