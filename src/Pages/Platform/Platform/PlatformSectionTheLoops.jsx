// PlatformSectionTheLoops.jsx
// Stacking-cards scroll section. Layout and design are unchanged; only the text/data/content is yours.
// Dependency: npm i motion

import { createContext, useContext, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";
import "./PlatformSectionTheLoops.css";

/* ---------- Icons (inline SVG) ---------- */

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const BoxIcon = () => (
  <svg {...iconProps}>
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg {...iconProps}>
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const PhoneIcon = () => (
  <svg {...iconProps}>
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

/* ---------- Stacking primitives (unchanged behavior) ---------- */

const StackContext = createContext(null);

function useStack() {
  const ctx = useContext(StackContext);
  if (!ctx) throw new Error("StackItem must be used within Stack");
  return ctx;
}

function Stack({
  children,
  totalCards,
  scaleMultiplier = 0.03,
  scrollOptions,
  className = "",
}) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
    ...scrollOptions,
    target: targetRef,
  });

  return (
    <StackContext.Provider
      value={{ progress: scrollYProgress, scaleMultiplier, totalCards }}
    >
      <div className={`loop__stack ${className}`} ref={targetRef}>
        {children}
      </div>
    </StackContext.Provider>
  );
}

function StackItem({ index, topPosition, children }) {
  const { progress, scaleMultiplier, totalCards } = useStack();
  const reduce = useReducedMotion();

  const scaleTo = 1 - (totalCards - index) * scaleMultiplier;
  const scale = useTransform(
    progress,
    [index / totalCards, 1],
    [1, reduce ? 1 : scaleTo],
  );
  const top = topPosition ?? `${5 + index * 3}%`;

  return (
    <div className="loop__item">
      <motion.div className="loop__item-inner" style={{ top, scale }}>
        {children}
      </motion.div>
    </div>
  );
}

/* ---------- Your content ---------- */

const Pill = ({ tone, children }) => (
  <span className={`loop__pill loop__pill--${tone}`}>{children}</span>
);

const Row = ({ label, children }) => (
  <div className="loop__row">
    <span className="loop__label">{label}</span>
    {children}
  </div>
);

const platformFeatures = [
  {
    key: "arrival",
    icon: <BoxIcon />,
    title: "Arrival notice",
    description:
      "One booking creates 3 shipment loads automatically. Every container inherits the booking reference and LFD date.",
    panel: (
      <div className="loop__panel">
        <div className="loop__panel-head">
          <span className="loop__panel-title">Arrival notice</span>
          <span className="loop__tag">AN-0142</span>
        </div>

        <div className="loop__rows">
          <Row label="Shipping line">
            <span className="loop__value">MAERSK</span>
          </Row>
          <Row label="Vessel / voyage">
            <span className="loop__value">KENSINGTON / 214E</span>
          </Row>
          <Row label="Booking">
            <span className="loop__value">MAEU 7741903</span>
          </Row>
        </div>

        <div className="loop__divider" />

        <div className="loop__rows">
          <Row label="MSMU 461 5308">
            <Pill tone="amber">LFD 12-SEP-26</Pill>
          </Row>
          <Row label="TCLU 772 9140">
            <Pill tone="blue">LFD 14-SEP-26</Pill>
          </Row>
          <Row label="MSDU 318 4472">
            <Pill tone="blue">LFD 14-SEP-26</Pill>
          </Row>
        </div>

        <div className="loop__callout loop__callout--blue">
          <p className="loop__callout-title">→ Creates 3 loads</p>
          <p className="loop__callout-desc">
            Each inherits the booking reference.
          </p>
        </div>

        <p className="loop__caption">
          One notice · three containers · one booking
        </p>
      </div>
    ),
  },
  {
    key: "credit",
    icon: <ShieldCheckIcon />,
    title: "Credit check · Step 06",
    description:
      "Compare credit limit, unpaid invoices, and in-flight exposure in real time. Orders exceeding available headroom are blocked for approval.",
    panel: (
      <div className="loop__panel">
        <div className="loop__panel-head">
          <span className="loop__panel-title">Credit check · step 06</span>
          <span className="loop__tag loop__tag--muted">Gulf Coast Imports</span>
        </div>

        <div className="loop__rows">
          <Row label="Terms">
            <Pill tone="green">NET 30</Pill>
          </Row>
          <Row label="Credit limit">
            <span className="loop__value">$ 50,000.00</span>
          </Row>
          <Row label="Invoiced, unpaid">
            <Pill tone="amber">$ 26,741.25</Pill>
          </Row>
          <Row label="In flight">
            <Pill tone="amber">$ 24,880.00</Pill>
          </Row>
        </div>

        <div className="loop__headroom">
          <span className="loop__headroom-label">Headroom</span>
          <span className="loop__headroom-value">− $1,621.25</span>
        </div>

        <div className="loop__callout loop__callout--red">
          <p className="loop__callout-title">× Blocked for credit review</p>
          <p className="loop__callout-desc">
            An approver decides in writing, and it is audited.
          </p>
        </div>

        <p className="loop__caption">
          Exposure counts the loads still in the air.
        </p>
      </div>
    ),
  },
  {
    key: "mobile",
    icon: <PhoneIcon />,
    title: "Mobile app",
    description:
      "Review containers, approve bookings, and manage freight from anywhere.",
    panel: (
      <div className="loop__panel">
        <div className="loop__panel-head">
          <span className="loop__panel-title">Mobile app</span>
          <span className="loop__tag">2 to approve</span>
        </div>

        <div className="loop__rows">
          <Row label="Booking">
            <span className="loop__value">MAEU 7741903</span>
          </Row>
          <Row label="Containers">
            <span className="loop__value">3 of 3 arrived</span>
          </Row>
          <Row label="Next LFD">
            <Pill tone="amber">12-SEP-26</Pill>
          </Row>
        </div>

        <div className="loop__divider" />

        <div className="loop__rows">
          <Row label="Gulf Coast Imports">
            <Pill tone="red">Credit review</Pill>
          </Row>
          <Row label="Booking MAEU 7741903">
            <Pill tone="green">Ready to approve</Pill>
          </Row>
        </div>

        <div className="loop__callout loop__callout--blue">
          <p className="loop__callout-title">→ Approve in one tap</p>
          <p className="loop__callout-desc">
            Every load updates as soon as you confirm.
          </p>
        </div>

        <p className="loop__caption">
          Review · approve · manage, from anywhere.
        </p>
      </div>
    ),
  },
];

/* ---------- Section ---------- */

export default function PlatformSectionTheLoops() {
  return (
    <section className="loop" aria-labelledby="loop-title">
      <header className="loop__intro">
        <h2 id="loop-title" className="loop__title">
          Manage every container wherever your logistics work happens
        </h2>
      </header>

      <Stack totalCards={platformFeatures.length}>
        {platformFeatures.map(
          ({ key, icon, title, description, panel }, index) => (
            <StackItem key={key} index={index}>
              <article className={`loop__card loop__card--${key}`}>
                <div className="loop__card-text">
                  <div className="loop__card-icon">{icon}</div>
                  <h3 className="loop__card-title">{title}</h3>
                  <p className="loop__card-copy">{description}</p>
                </div>

                {panel}
              </article>
            </StackItem>
          ),
        )}
      </Stack>

      <div className="loop__outro" aria-hidden="true" />
    </section>
  );
}
