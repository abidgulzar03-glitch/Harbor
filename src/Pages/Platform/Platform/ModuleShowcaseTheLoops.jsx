import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import "./ModuleShowcaseTheLoops.css";

/* =========================================================
   SECTIONS  (colour + label shared by the cards in a section)
========================================================= */

const SECTIONS = {
  workspace: { label: "Workspace", from: "#286953", to: "#143d2f" },
  operations: { label: "Operations", from: "#3a5a9b", to: "#1c2f5c" },
  records: { label: "Records", from: "#c0702a", to: "#7a3d10" },
  finance: { label: "Finance", from: "#8a4478", to: "#4a1f40" },
  administration: { label: "Administration", from: "#55637a", to: "#242d3b" },
};

/* =========================================================
   DEFAULT ITEMS  (pass your own with the `items` prop)
   item = { id, title, description, section, image? }
   `image` is optional: without it the card shows the section colour.
========================================================= */

const ITEMS = [
  {
    id: 1,
    section: "workspace",
    title: "WORKSPACE",
    summary:
      "Your daily starting point: live work, open loads and every container's status in one place.",
    description: "Dashboard, Load board, Pipeline, Container 360.",
  },
  {
    id: 2,
    section: "operations",
    title: "OPERATIONS",
    summary:
      "Run every shipment from booking to delivery, with tracking, rates, notices and appointments together.",
    description:
      "Shipments board, Tasks & exceptions, Tracking, Rate board, Arrival notices, Delivery orders, Appointments, Auto Pilot.",
  },
  {
    id: 3,
    section: "records",
    title: "RECORDS",
    summary:
      "Keep customer and carrier details in order, and decide approvals and credit requests without chasing paperwork.",
    description: "Customers, Carriers, Approvals, Credit requests.",
  },
  {
    id: 4,
    section: "finance",
    title: "FINANCE",
    summary:
      "Bill, collect and pay with confidence, and see company profit as the work happens.",
    description:
      "Invoices, Receivables, Payables, Advance ledger, Debit & credit notes, Commissions, Operating expenses, Company P&L.",
  },
  {
    id: 5,
    section: "administration",
    title: "ADMINISTRATION",
    summary:
      "Control access, review every change and connect the platform and portals to how your team works.",
    description:
      "Reports, Audit log, Users & roles, Company profile, Integrations, Portal control.",
  },
];

/* =========================================================
   RESPONSIVE CARD WIDTH
   300px on desktop, shrinks to 150px on phones.
   All 3D spacing is derived from this one number.
========================================================= */

const BASE_CARD_W = 300;

function useCardWidth() {
  const [width, setWidth] = useState(BASE_CARD_W);

  useEffect(() => {
    const update = () =>
      setWidth(
        Math.round(
          Math.min(BASE_CARD_W, Math.max(150, window.innerWidth * 0.25)),
        ),
      );
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return width;
}

export default function ModuleShowcaseTheLoops({
  items = ITEMS,
  variant = "magnetic",
  titleLines = ["Thirty modules, five sections of one sidebar"],
  eyebrow = "Every module",
  subtitle = "A section vanishes when a user has no module inside it.",

  scrollPerItem = 500, // px of page scroll for each card
}) {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const cardW = useCardWidth();
  const k = cardW / BASE_CARD_W; // scale factor vs desktop

  // Steps between cards (original 240 / -84 / -288 at 300px wide)
  const stepX = 240 * k;
  const stepY = -84 * k;
  const stepZ = -288 * k;

  // Two copies so the track never runs out of cards
  const duplicatedItems = [...items, ...items];
  const count = items.length;

  // Section scroll progress 0 -> 1 = exactly one full loop
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const spring = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.00001,
  });
  const progress = reduceMotion ? scrollYProgress : spring;

  const x = useTransform(progress, (p) => -p * count * stepX);
  const y = useTransform(progress, (p) => -p * count * stepY);
  const z = useTransform(progress, (p) => -p * count * stepZ);

  // Mouse position for magnetic / uplift (off-screen = inactive)
  const mouseX = useMotionValue(-10000);
  const mouseY = useMotionValue(-10000);

  const handlePointerMove = (e) => {
    if (variant === "simple" || e.pointerType !== "mouse") return;
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const handlePointerLeave = () => {
    mouseX.set(-10000);
    mouseY.set(-10000);
  };

  return (
    <section
      ref={sectionRef}
      className="module-showcase"
      aria-label={titleLines.join(" ")}
      style={{
        // scroll length = one loop + one screen
        height: `calc(${count * scrollPerItem}px + 100vh)`,
        "--ms-card-w": `${cardW}px`,
      }}
    >
      <div
        className="module-showcase__stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* Header overlay */}
        <div className="module-showcase__header">
          <span className="module-showcase__eyebrow">{eyebrow}</span>
          <div className="module-showcase__title">
            <h2 className="module-showcase__title-line module-showcase__title-line--indent">
              {titleLines[0]}
            </h2>
            <h2 className="module-showcase__title-line">{titleLines[1]}</h2>
          </div>
          <p className="module-showcase__subtitle">{subtitle}</p>
        </div>

        <div className="module-showcase__hint" aria-hidden="true">
          <span className="module-showcase__hint-line" />
        </div>

        {/* 3D scene */}
        <div className="module-showcase__scene">
          <motion.div
            className="module-showcase__track"
            style={{ x, y, z, transformStyle: "preserve-3d" }}
          >
            {duplicatedItems.map((item, i) => (
              <Card
                key={`${item.id}-${i}`}
                item={item}
                i={i}
                stepX={stepX}
                stepY={stepY}
                stepZ={stepZ}
                k={k}
                mouseX={mouseX}
                mouseY={mouseY}
                scrollProgress={progress}
                variant={variant}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   CARD
========================================================= */

function Card({
  item,
  i,
  stepX,
  stepY,
  stepZ,
  k,
  mouseX,
  mouseY,
  scrollProgress,
  variant,
}) {
  const ref = useRef(null);
  const section = SECTIONS[item.section] || SECTIONS.workspace;

  // Distance from mouse to card center (normalised to desktop size)
  const distance = useTransform(
    [mouseX, mouseY, scrollProgress],
    ([mx, my]) => {
      if (variant === "simple" || mx < -5000 || !ref.current) return 1000;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      return Math.hypot(mx - cx, my - cy) / k;
    },
  );

  // Magnetic: closer = larger
  const targetScale = useTransform(distance, [0, 400], [1.5, 1]);
  const springScale = useSpring(targetScale, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  // Uplift: closer = moves up
  const targetUplift = useTransform(distance, [0, 400], [-100, 0]);
  const springUplift = useSpring(targetUplift, {
    mass: 0.5,
    stiffness: 300,
    damping: 20,
  });

  const transform = useTransform([springScale, springUplift], ([s, u]) => {
    const scale = variant === "magnetic" ? Number(s) : 1;
    const uplift = variant === "uplift" ? Number(u) * k : 0;

    return `translate3d(${i * stepX}px, ${i * stepY + uplift}px, ${i * stepZ}px) rotateY(-50deg) scale(${scale})`;
  });

  return (
    <motion.div
      ref={ref}
      className="module-showcase__card"
      style={{ transform, transformStyle: "preserve-3d" }}
    >
      <div className="module-showcase__card-content">
        <div
          className="module-showcase__card-media"
          style={
            item.image
              ? undefined
              : {
                  background: `linear-gradient(150deg, ${section.from}, ${section.to})`,
                }
          }
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              decoding="async"
              draggable="false"
            />
          )}
        </div>

        <div className="module-showcase__card-overlay" />

        <div className="module-showcase__card-info">
          <h3>{item.title}</h3>
          {item.summary && (
            <p className="module-showcase__card-summary">{item.summary}</p>
          )}
          {item.description && (
            <p className="module-showcase__card-text">{item.description}</p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
