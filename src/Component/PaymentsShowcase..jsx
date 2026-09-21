import { useEffect, useRef, useState } from "react";
import "./PaymentsShowcase.css";

/* ---------------------------------------------------------- */
/*  Small inline icons (no external icon library required)     */
/* ---------------------------------------------------------- */

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

function BookingCard() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mock-card booking-card">
      <div className="booking-head">
        <div className="avatar">DM</div>
        <div>
          <div className="booking-name">Dominic Mills</div>
          <div className="booking-title">Consultation</div>
        </div>
      </div>
      <div className="booking-meta">
        <span>
          <Icon.Clock className="mi" /> 45 min
        </span>
        <span>
          <Icon.Camera className="mi" /> Zoom
        </span>
        <span>
          <Icon.Dollar className="mi" /> 100
        </span>
      </div>
      <div className="processor-row">
        <span className="processor-label">Payment Processor</span>
        <div className={`processor-select ${open ? "open" : ""}`}>
          <span>{open ? "" : ""}</span>
          <Icon.Chevron className="mi chevron" />
        </div>
      </div>
      <div className={`processor-options ${open ? "show" : ""}`}>
        <div className="processor-option">PayPal</div>
        <div className="processor-option active">Stripe</div>
      </div>
    </div>
  );
}

function PackagesCard() {
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
          <div className="package-name">Coaching Package</div>
          <div className="package-meta">10 sessions &middot; $950.00</div>
        </div>
      </div>
      <div className={`package-row reveal ${showSecond ? "show" : ""}`}>
        <span className="package-icon sparkle">
          <Icon.Sparkle className="mi" />
        </span>
        <div>
          <div className="package-name">Yoga Session Package</div>
          <div className="package-meta">8 sessions &middot; $350.00</div>
        </div>
      </div>
    </div>
  );
}

function InvoiceCard() {
  const [extra, setExtra] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setExtra(true), 1400);
    return () => clearTimeout(t);
  }, []);

  const rows = [
    { label: "Standard Package", qty: 1, price: 1450 },
    { label: "Retainer Fee", qty: 1, price: 250 },
  ];
  if (extra) rows.push({ label: "Additional Revisions", qty: 1, price: 405 });
  const total = rows.reduce((sum, r) => sum + r.price, 0);

  return (
    <div className="mock-card invoice-card">
      <div className="invoice-table">
        <div className="invoice-row invoice-head">
          <span>Description</span>
          <span>Qty</span>
          <span>Price</span>
        </div>
        {rows.map((r, i) => (
          <div
            className={`invoice-row ${i === rows.length - 1 && extra ? "row-in" : ""}`}
            key={r.label}
          >
            <span>{r.label}</span>
            <span>{r.qty}</span>
            <span>
              ${r.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              <Icon.Trash className="mi trash" />
            </span>
          </div>
        ))}
      </div>
      <div className="invoice-total">
        <span>Amount Due</span>
        <span className="total-amount" key={total}>
          ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </span>
      </div>
      <button className="invoice-add" type="button">
        <Icon.Plus className="mi" /> Add line item
      </button>
      <button className="invoice-send" type="button">
        <Icon.Send className="mi" /> Send invoice
      </button>
    </div>
  );
}

function LinkCard() {
  return (
    <div className="mock-card link-card">
      <div className="link-title">Your link is ready!</div>
      <div className="link-sub">Share your payment link to start selling.</div>
      <div className="link-url">calendly.com/jane-smith-calendly/p...</div>
      <button className="copy-btn" type="button">
        <Icon.Link className="mi" /> Copy Link
      </button>
    </div>
  );
}

/* ---------------------------------------------------------- */
/*  Slide data                                                  */
/* ---------------------------------------------------------- */

const SLIDES = [
  {
    key: "upfront",
    icon: Icon.Register,
    title: "Upfront meeting payments",
    description:
      "Collect payment when clients book with you, so you can get paid sooner and reduce no-shows.",
    gradient: "grad-blue",
    Card: BookingCard,
  },
  {
    key: "packages",
    icon: Icon.Box,
    title: "Meeting packages",
    description:
      "Sell multi-session bundles clients can purchase once and schedule over time \u2014 ideal for ongoing client work like coaching and consulting.",
    gradient: "grad-purple",
    Card: PackagesCard,
  },
  {
    key: "invoices",
    icon: Icon.Doc,
    title: "Invoices",
    description:
      "Send professional branded invoices for post-meeting billing, installments, or project-based work, with built-in tracking and reminders.",
    gradient: "grad-teal",
    Card: InvoiceCard,
  },
  {
    key: "links",
    icon: Icon.Link,
    title: "Payment links",
    description:
      "Share payment links to quickly request payment for anything, anytime \u2014 from one-off services to follow-up fees.",
    gradient: "grad-indigo",
    Card: LinkCard,
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

  useEffect(() => {
    if (paused) return undefined;
    timerRef.current = setTimeout(() => {
      setActive((a) => (a + 1) % SLIDES.length);
      setCycle((c) => c + 1);
    }, AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
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
          <span className="badge">
            <Icon.Register className="badge-icon" />
            Payments
          </span>
          <span className="new-pill">New</span>
        </div>

        <h2 className="headline">
          Flexible payment options
          <br />
          that fit your business
        </h2>

        <ul className="feature-list">
          {SLIDES.map((slide, i) => {
            const isActive = i === active;
            const SlideIcon = slide.icon;
            return (
              <li
                key={slide.key}
                className={isActive ? "feature-item active" : "feature-item"}
                onClick={() => goTo(i)}
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
                  {isActive && !paused && (
                    <div className="progress-fill" key={cycle} />
                  )}
                  {isActive && paused && (
                    <div className="progress-fill paused" />
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
