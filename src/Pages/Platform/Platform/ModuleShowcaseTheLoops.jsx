import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import "./ModuleShowcaseTheLoops.css";

/* =========================================================
   SECTIONS  (gradient colours shared by the cards)
   Each section has soft light/mid/deep tones for the panel.
========================================================= */

const SECTIONS = {
  // blue
  workspace: {
    label: "Workspace",
    gradient:
      "linear-gradient(160deg, #1f4f9c 0%, #2f6db5 35%, #4f90d0 70%, #7fb8e6 100%)",
    a: "#dcebf8", // light tint (chips, icon background)
    c: "#1f4f9c", // deep colour (chip text, icon)
  },
  // indigo
  operations: {
    label: "Operations",
    gradient:
      "linear-gradient(160deg, #1a2fb8 0%, #2f46d6 35%, #5b6ee8 70%, #8f9cf2 100%)",
    a: "#e0e4fb",
    c: "#1a2fb8",
  },
  // orange
  records: {
    label: "Records",
    gradient:
      "linear-gradient(160deg, #d6401f 0%, #e8502f 35%, #ef7a4f 70%, #f6a27a 100%)",
    a: "#fde4d8",
    c: "#c0391a",
  },
  // purple
  finance: {
    label: "Finance",
    gradient:
      "linear-gradient(160deg, #5b1fa8 0%, #7a35c9 35%, #9d5fe0 70%, #c19bf0 100%)",
    a: "#ece1fa",
    c: "#5b1fa8",
  },
  // magenta-purple
  administration: {
    label: "Administration",
    gradient:
      "linear-gradient(160deg, #7a1f7a 0%, #9b2f9b 35%, #bf5bbf 70%, #dd92dd 100%)",
    a: "#f6e0f6",
    c: "#7a1f7a",
  },
};

/* =========================================================
   DEFAULT ITEMS  (pass your own with the `items` prop)
   item = { id, title, summary, description, section, image? }
   `description` is a comma separated list of modules.
========================================================= */

const ITEMS = [
  {
    id: 1,
    section: "workspace",
    title: "Workspace",
    summary:
      "Your daily starting point: live work, open loads and every container's status in one place.",
    description: "Dashboard, Load board, Pipeline, Container 360.",
  },
  {
    id: 2,
    section: "operations",
    title: "Operations",
    summary:
      "Run every shipment from booking to delivery, with tracking, rates, notices and appointments together.",
    description:
      "Shipments board, Tasks & exceptions, Tracking, Rate board, Arrival notices, Delivery orders, Appointments, Auto Pilot.",
  },
  {
    id: 3,
    section: "records",
    title: "Records",
    summary:
      "Keep customer and carrier details in order, and decide approvals and credit requests without chasing paperwork.",
    description: "Customers, Carriers, Approvals, Credit requests.",
  },
  {
    id: 4,
    section: "finance",
    title: "Finance",
    summary:
      "Bill, collect and pay with confidence, and see company profit as the work happens.",
    description:
      "Invoices, Receivables, Payables, Advance ledger, Debit & credit notes, Commissions, Operating expenses, Company P&L.",
  },
  {
    id: 5,
    section: "administration",
    title: "Administration",
    summary:
      "Control access, review every change and connect the platform and portals to how your team works.",
    description:
      "Reports, Audit log, Users & roles, Company profile, Integrations, Portal control.",
  },
];

const MAX_CHIPS = 3;

function parseModules(description = "") {
  return description
    .replace(/\.$/, "")
    .split(",")
    .map((m) => m.trim())
    .filter(Boolean);
}

export default function ModuleShowcaseTheLoops({
  items = ITEMS,
  eyebrow = "Every module",
  titleLines = ["Thirty modules,", "five sections of one sidebar"],
  subtitle = "A section vanishes when a user has no module inside it.",
  scrollSpeed = 1.6, // page scroll per px of sideways travel (higher = slower)
}) {
  const lines = Array.isArray(titleLines) ? titleLines : [titleLines];
  const reduceMotion = useReducedMotion();

  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  // How far the row has to travel so the last card reaches the right edge
  const [distance, setDistance] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      const viewport = viewportRef.current;
      if (!track || !viewport) return;
      setDistance(Math.max(0, track.scrollWidth - viewport.clientWidth));
    };
    measure();

    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (viewportRef.current) ro.observe(viewportRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [items.length]);

  // Start the card animations once the section is on screen
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Vertical scroll through the section -> horizontal slide, right to left
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const spring = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.2,
    restDelta: 0.0005,
  });
  const x = useTransform(
    reduceMotion ? scrollYProgress : spring,
    [0, 1],
    [0, -distance],
  );

  const scrollLength = Math.max(distance * scrollSpeed, 480);
  const isStatic = reduceMotion || distance === 0;

  return (
    <section
      ref={sectionRef}
      className={`module-showcase${visible ? " is-visible" : ""}${
        isStatic ? " is-static" : ""
      }`}
      aria-label={lines.join(" ")}
      style={
        isStatic ? undefined : { height: `calc(100svh + ${scrollLength}px)` }
      }
    >
      <div className="module-showcase__stage">
        <header className="module-showcase__header">
          {eyebrow && (
            <span className="module-showcase__eyebrow">{eyebrow}</span>
          )}
          <h2 className="module-showcase__title">
            {lines.map((line, i) => (
              <span key={i} className="module-showcase__title-line">
                {line}
              </span>
            ))}
          </h2>
          {subtitle && <p className="module-showcase__subtitle">{subtitle}</p>}
        </header>

        <div ref={viewportRef} className="module-showcase__viewport">
          <motion.ul
            ref={trackRef}
            className="module-showcase__track"
            style={isStatic ? undefined : { x }}
          >
            {items.map((item, i) => (
              <Card key={item.id} item={item} index={i} />
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CARD
========================================================= */

function Card({ item, index = 0 }) {
  const section = SECTIONS[item.section] || SECTIONS.workspace;
  const modules = parseModules(item.description);
  const shown = modules.slice(0, MAX_CHIPS);
  const extra = modules.length - shown.length;

  return (
    <li className="module-showcase__card" style={{ "--i": index }}>
      <div
        className="module-showcase__panel"
        style={{
          "--g": section.gradient,
          "--a": section.a,
          "--c": section.c,
        }}
      >
        {item.image ? (
          <img
            className="module-showcase__panel-img"
            src={item.image}
            alt={item.title}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
        ) : (
          <div className="module-showcase__mock">
            <div className="module-showcase__mock-head">
              <span className="module-showcase__mock-icon" aria-hidden="true">
                {item.title.charAt(0)}
              </span>
              <span className="module-showcase__live" aria-hidden="true" />
              <span className="module-showcase__mock-heading">
                <span className="module-showcase__mock-title">
                  {item.title}
                </span>
                <span className="module-showcase__mock-sub">
                  {modules.length} modules
                </span>
              </span>
            </div>

            <ul className="module-showcase__chips">
              {shown.map((m) => (
                <li key={m} className="module-showcase__chip">
                  {m}
                </li>
              ))}
              {extra > 0 && (
                <li className="module-showcase__chip module-showcase__chip--more">
                  +{extra} more
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      <p className="module-showcase__text">
        <strong>{item.title}</strong> {item.summary}
      </p>
    </li>
  );
}
