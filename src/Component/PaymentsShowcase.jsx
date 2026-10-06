import { useEffect, useRef, useState } from "react";
import "./PaymentsShowcase.css";

const Icon = {
  Register: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M7 8V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
      <path d="M3 13h18" />
    </svg>
  ),
  Box: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
      <path d="M4.5 7.5L12 12l7.5-4.5" />
      <path d="M12 12v9" />
    </svg>
  ),
  Doc: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M6 2.5h9l3 3v16H6z" />
      <path d="M9 11h6M9 14.5h6M9 18h4" />
    </svg>
  ),
  Link: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M9.5 14.5l5-5" />
      <path d="M8 17.5H6.5A4.5 4.5 0 0 1 6.5 8.5H8" />
      <path d="M16 6.5h1.5a4.5 4.5 0 0 1 0 9H16" />
    </svg>
  ),
  ArrowUpRight: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  ),
  Clock: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  Camera: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <rect x="2.5" y="6.5" width="13" height="11" rx="2" />
      <path d="M15.5 10.5l6-3.5v10l-6-3.5" />
    </svg>
  ),
  Dollar: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v10M15 9.8c0-1.5-1.3-2.3-3-2.3s-3 .8-3 2.1c0 3 6 1.4 6 4.4 0 1.4-1.3 2.3-3 2.3s-3-.9-3-2.3" />
    </svg>
  ),
  Chevron: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  ),
  Heart: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M12 20s-7-4.4-9.5-8.8C.7 7.8 2.3 4.5 5.6 4c2-.3 3.6.7 4.4 2.2C10.8 4.7 12.4 3.7 14.4 4c3.3.5 4.9 3.8 3.1 7.2C15 15.6 12 20 12 20z" />
    </svg>
  ),
  Sparkle: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M12 3l1.6 4.9L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.1L12 3z" />
      <path d="M5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16z" />
    </svg>
  ),
  Trash: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m-8 0 1 12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1l1-12" />
    </svg>
  ),
  Plus: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...p}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  Send: (p) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      {...p}
    >
      <path d="M3 11l18-7-7 18-2.5-7.5L3 11z" />
    </svg>
  ),
};

/* ---------------------------------------------------------- */
/*  Card mockups shown inside the visual panel                 */
/* ---------------------------------------------------------- */

/* 1 · Operations */
function OperationsCard() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mock-card booking-card">
      <div className="booking-head">
        <div className="avatar">O</div>
        <div>
          <div className="booking-name">Operations</div>
          <div className="booking-title">Drayage desk</div>
        </div>
      </div>
      <div className="booking-meta">
        <span>
          <Icon.Clock className="mi" /> Screen 1
        </span>
        <span>
          <Icon.Camera className="mi" /> Screen 2
        </span>
        <span>
          <Icon.Dollar className="mi" /> Screen 3
        </span>
      </div>
      <div className="processor-row">
        <span className="processor-label">Operations</span>
        <div className={`processor-select ${open ? "open" : ""}`}>
          <span>{open ? "" : ""}</span>
          <Icon.Chevron className="mi chevron" />
        </div>
      </div>
      <div className={`processor-options ${open ? "show" : ""}`}>
        <div className="processor-option">Drayage desk</div>
        <div className="processor-option active">Three screens</div>
      </div>
    </div>
  );
}

/* 2 · Compliance */
function ComplianceCard() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const iv = setInterval(() => setN((c) => (c >= 5 ? c : c + 1)), 350);
    return () => clearInterval(iv);
  }, []);

  const items = [
    { name: "MC and DOT authority", meta: "Authority" },
    { name: "Insurance BIPD and cargo", meta: "Insurance" },
    { name: "W9 on file", meta: "W9" },
    { name: "Reviewer signature", meta: "Reviewer" },
    { name: "Re-check at thirty days", meta: "Freshness clock" },
  ];

  return (
    <div className="mock-card packages-card">
      {items.map((it, i) => (
        <div
          className={`package-row${i === 0 ? "" : " reveal"} ${n > i ? "show" : ""}`}
          key={it.name}
        >
          <span className="package-icon heart">
            {i === items.length - 1 ? (
              <Icon.Clock className="mi" />
            ) : (
              <Icon.Doc className="mi" />
            )}
          </span>
          <div>
            <div className="package-name">{it.name}</div>
            <div className="package-meta">{it.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* 3 · Reports */
function ReportsCard() {
  const [extra, setExtra] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setExtra(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const rows = [
    { label: "Concentration", qty: 1, price: "Date range" },
    { label: "Collections", qty: 2, price: "Date range" },
    { label: "Margin by lane", qty: 3, price: "Date range" },
    { label: "Demurrage watch", qty: 4, price: "Date range" },
  ];
  if (extra) rows.push({ label: "Carrier risk", qty: 5, price: "Date range" });

  return (
    <div className="mock-card invoice-card">
      <div className="invoice-table">
        <div className="invoice-row invoice-head">
          <span>Report</span>
          <span>Tab</span>
          <span>Range</span>
        </div>
        {rows.map((r, i) => (
          <div
            className={`invoice-row ${i === rows.length - 1 && extra ? "row-in" : ""}`}
            key={r.label}
          >
            <span>{r.label}</span>
            <span>{r.qty}</span>
            <span>{r.price}</span>
          </div>
        ))}
      </div>
      <div className="invoice-total">
        <span>Reports</span>
        <span className="total-amount" key={rows.length}>
          Nine tabs
        </span>
      </div>
      <button className="invoice-add" type="button">
        <Icon.Plus className="mi" /> One date range
      </button>
      <button className="invoice-send" type="button">
        <Icon.Send className="mi" /> Reports →
      </button>
    </div>
  );
}

/* Shared "link" style card (Integrations + Finance) */
function LinkCard({ title, sub, url, button }) {
  return (
    <div className="mock-card link-card">
      <div className="link-title">{title}</div>
      <div className="link-sub">{sub}</div>
      <div className="link-url">{url}</div>
      <button className="copy-btn" type="button">
        <Icon.Link className="mi" /> {button}
      </button>
    </div>
  );
}

/* 4 · Integrations */
function IntegrationsCard() {
  return (
    <LinkCard
      title="Server-side only."
      sub="Every call audited."
      url="FMCSA QCMobile, DAT, Truckstop, Samsara, Project44"
      button="Integrations →"
    />
  );
}

/* 5 · Portals */
function PortalsCard() {
  const [showSecond, setShowSecond] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowSecond(true), 900);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mock-card packages-card">
      <div className="package-row">
        <span className="package-icon heart">
          <Icon.Heart className="mi" />
        </span>
        <div>
          <div className="package-name">Self-serve outside</div>
          <div className="package-meta">Portals</div>
        </div>
      </div>
      <div className={`package-row reveal ${showSecond ? "show" : ""}`}>
        <span className="package-icon sparkle">
          <Icon.Sparkle className="mi" />
        </span>
        <div>
          <div className="package-name">Everything submitted</div>
          <div className="package-meta">Is a proposal</div>
        </div>
      </div>
    </div>
  );
}

/* 6 · Finance */
function FinanceCard() {
  return (
    <LinkCard
      title="Finance"
      sub="Charges become invoices by construction."
      url="Charge → Invoice"
      button="Finance →"
    />
  );
}

/* ---------------------------------------------------------- */
/*  Slide data                                                  */
/* ---------------------------------------------------------- */

const SLIDES = [
  {
    key: "operations",
    icon: Icon.Box,
    title: "Operations",
    description: "The three screens a drayage desk lives in.",
    gradient: "grad-blue",
    Card: OperationsCard,
  },
  {
    key: "compliance",
    icon: Icon.Clock,
    title: "Compliance",
    description: "Authority, insurance and W9 on a freshness clock.",
    gradient: "grad-purple",
    Card: ComplianceCard,
  },
  {
    key: "reports",
    icon: Icon.Doc,
    title: "Reports",
    description: "Nine tabs, one date range.",
    gradient: "grad-teal",
    Card: ReportsCard,
  },
  {
    key: "integrations",
    icon: Icon.Link,
    title: "Integrations",
    description: "Server-side only. Every call audited.",
    gradient: "grad-indigo",
    Card: IntegrationsCard,
  },
  {
    key: "portals",
    icon: Icon.Send,
    title: "Portals",
    description: "Self-serve outside. Everything submitted is a proposal.",
    gradient: "grad-blue",
    Card: PortalsCard,
  },
  {
    key: "finance",
    icon: Icon.Dollar,
    title: "Finance",
    description: "Charges become invoices by construction.",
    gradient: "grad-purple",
    Card: FinanceCard,
  },
];

const AUTOPLAY_MS = 3500;

/* ---------------------------------------------------------- */
/*  Main component                                              */
/* ---------------------------------------------------------- */

export default function PaymentsShowcase() {
  const [active, setActive] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const remainingRef = useRef(AUTOPLAY_MS); // time left on the current slide
  const startedRef = useRef(0);
  const lastActiveRef = useRef(0);

  useEffect(() => {
    // new slide -> full time again
    if (lastActiveRef.current !== active) {
      lastActiveRef.current = active;
      remainingRef.current = AUTOPLAY_MS;
    }
    if (paused) return undefined;
    startedRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % SLIDES.length);
      setCycle((c) => c + 1);
    }, remainingRef.current);
    return () => {
      clearTimeout(timerRef.current);
      // remember how much time is left so hover-pause resumes correctly
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (Date.now() - startedRef.current),
      );
    };
  }, [active, paused]);

  const goTo = (i) => {
    if (i === active) return;
    clearTimeout(timerRef.current);
    setActive(i);
    setCycle((c) => c + 1);
  };

  const ActiveCard = SLIDES[active].Card;

  return (
    <div
      className="payments-showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={`visual-panel ${SLIDES[active].gradient}`}>
        <div className="stripes" aria-hidden="true" />
        <div className="card-slot">
          <div className="card-anim" key={SLIDES[active].key}>
            <ActiveCard />
          </div>
        </div>
      </div>

      <div className="content-panel">
        <div className="eyebrow-row">
          <span className="badge">The platform</span>
        </div>

        <h2 className="headline">
          Thirty-three modules.
          <br />
          Not seven subscriptions.
        </h2>
        <p className="headline-sub">
          One system on one database, so nothing is re-keyed and nothing
          disagrees with itself.
        </p>

        <ul className="feature-list">
          {SLIDES.map((slide, i) => {
            const isActive = i === active;
            const SlideIcon = slide.icon;
            return (
              <li
                key={slide.key}
                className={`feature-item${isActive ? " active" : ""}${i < active ? " done" : ""}`}
                onClick={() => goTo(i)}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    goTo(i);
                  }
                }}
              >
                <div className="feature-row">
                  <SlideIcon className="feature-icon" />
                  <span className="feature-title">{slide.title}</span>
                  {isActive && <Icon.ArrowUpRight className="feature-arrow" />}
                </div>

                <div className={`feature-desc ${isActive ? "show" : ""}`}>
                  <p>{slide.description}</p>
                </div>

                <div className="progress-track">
                  {isActive && (
                    <div
                      className="progress-fill"
                      key={cycle}
                      style={{
                        animationDuration: `${AUTOPLAY_MS}ms`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
