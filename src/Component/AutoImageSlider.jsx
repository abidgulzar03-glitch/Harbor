import { useEffect, useRef } from "react";
import "./AutoImageSlider.css";

/* ------------------------------------------------------------------ *
 *  All copy lives here. Three cards = three plans.
 *  `dark: true` gives the highlighted (recommended) look.
 * ------------------------------------------------------------------ */
const PLANS = [
  {
    key: "desk",
    icon: "desk",
    name: "Desk",
    tagline: "One office running its own book.",
    price: "Pricing on a call",
    cta: "Book a demo",
    included: "What’s included",
    features: [
      "Load board and workspace",
      "Compliance gate and credit gate",
      "Itemized charges and invoicing",
      "Roles and the audit log",
    ],
  },
  {
    key: "terminal",
    icon: "terminal",
    name: "Terminal",
    tagline: "Drayage with the money attached.",
    price: "Pricing on a call",
    cta: "Book a demo",
    included: "What’s included",
    badge: "Recommended",
    dark: true,
    features: [
      "Everything in Desk",
      "Advance ledger and demurrage watch",
      "Customer and carrier portals",
      "Arrival notices and the report hub",
    ],
  },
  {
    key: "fleet",
    icon: "fleet",
    name: "Fleet",
    tagline: "More than one entity, more than one office.",
    price: "Pricing on a call",
    cta: "Book a demo",
    included: "What’s included",
    features: [
      "Everything in Terminal",
      "Multiple entities under one login",
      "Custom roles and single sign-on",
      "Commission runs and tenant backup",
    ],
  },
];

const VH_PER_CARD = 70; // scroll distance each card gets

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/* ---------------------------- small pieces ---------------------------- */
const svgProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
};

const PlanIcon = ({ name }) => {
  if (name === "desk")
    return (
      <svg {...svgProps}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8M8 12h8M8 15h8" />
      </svg>
    );
  if (name === "terminal")
    return (
      <svg {...svgProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v5M12 16h.01" />
      </svg>
    );
  return (
    <svg {...svgProps}>
      <path d="M4 8h15M15 4l4 4-4 4M20 16H5M9 12l-4 4 4 4" />
    </svg>
  );
};

const Check = () => (
  <svg
    width="10"
    height="10"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M5 12l5 5 10-10" />
  </svg>
);

const ArrowUpRight = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17L17 7M8 7h9v9" />
  </svg>
);

/* -------------------------------- main -------------------------------- */
export default function AutoImageSlider({
  eyebrow = "Pricing",
  title = "Three shapes of brokerage.",
  subtitle = "Quoted on seats, load volume, integrations and deployment — after we have seen your book.",
  plans = PLANS,
  footnote = "Running your own instance in your own region is Enterprise.",
  footLink = "Compare all four tiers →",
  footHref = "#",
  ctaHref = "#",
}) {
  const scrollRef = useRef(null);
  const stickyRef = useRef(null);
  const cardRefs = useRef([]);
  const count = plans.length;

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = scrollRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const stickyH = stickyRef.current
        ? stickyRef.current.offsetHeight
        : window.innerHeight;
      const total = el.offsetHeight - stickyH;
      const progress = total > 0 ? clamp(-rect.top / total, 0, 1) : 0;

      // u runs 0 → count-1: the integer part is the card currently leaving
      const u = progress * (count - 1);

      cardRefs.current.forEach((card, i) => {
        if (!card) return;

        const local = clamp(u - i, 0, 1); // how far card i has left (0 → 1)
        const depth = Math.max(0, i - u); // how far card i sits behind the top card
        const dir = i % 2 === 0 ? -1 : 1; // cards leave left / right in turn

        let transform;
        let opacity;

        if (local > 0) {
          // leaving the stack
          transform = `translate3d(${dir * local * 125}%, ${-local * 8}%, 0) rotate(${dir * local * 14}deg)`;
          opacity = 1 - clamp((local - 0.65) / 0.35, 0, 1);
        } else {
          // waiting in the stack
          transform = `translate3d(0, ${depth * 14}px, ${-depth * 40}px) scale(${1 - depth * 0.05})`;
          opacity = clamp(4 - depth, 0, 1);
        }

        card.style.transform = transform;
        card.style.opacity = String(opacity);
        card.style.zIndex = String(count - i);
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [count]);

  return (
    <section className="auto-image-slider">
      <div className="auto-image-heading">
        <p className="auto-image-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="auto-image-subtitle">{subtitle}</p>
      </div>

      {/* one screen + 70vh of scrolling per card that has to leave */}
      <div
        className="auto-image-scroll"
        ref={scrollRef}
        style={{ height: `calc(100svh + ${(count - 1) * VH_PER_CARD}vh)` }}
      >
        <div className="auto-image-sticky" ref={stickyRef}>
          <div className="auto-image-stack">
            {plans.map((p, i) => (
              <article
                className={
                  "auto-image-card auto-image-card--plan" +
                  (p.dark ? " is-dark" : "")
                }
                key={p.key}
                ref={(node) => {
                  cardRefs.current[i] = node;
                }}
              >
                <div className="auto-image-plan">
                  <span className="auto-image-plan-icon">
                    <PlanIcon name={p.icon} />
                  </span>
                  {p.badge && (
                    <span className="auto-image-plan-badge">{p.badge}</span>
                  )}

                  <h3 className="auto-image-plan-name">{p.name}</h3>
                  <p className="auto-image-plan-tag">{p.tagline}</p>
                  <p className="auto-image-plan-price">{p.price}</p>

                  <a className="auto-image-plan-cta" href={ctaHref}>
                    {p.cta}
                    {!p.dark && <ArrowUpRight />}
                  </a>

                  <p className="auto-image-plan-label">{p.included}</p>
                  <ul className="auto-image-plan-list">
                    {p.features.map((f) => (
                      <li key={f}>
                        <span className="auto-image-plan-check">
                          <Check />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <p className="auto-image-foot">
            <span>{footnote}</span>
            <a href={footHref}>{footLink}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
