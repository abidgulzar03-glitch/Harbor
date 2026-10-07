import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./CircularCarousel.css";

const cards = [
  {
    id: "01",
    title: "Arrival notice in",
    text: "Upload the line's PDF. One notice raises one load, or forty on the same booking.",
    color: "#315fe8",
  },
  {
    id: "02",
    title: "Load created",
    text: "Parties, equipment, stops, charges. Flag SSL or customs and the advance shells exist before anyone forgets them.",
    color: "#238a68",
  },
  {
    id: "03",
    title: "Posted to the boards",
    text: "DAT, Truckstop and Loadmatch from the record itself. A retry cannot post your load twice at two rates.",
    color: "#7656d9",
  },
  {
    id: "04",
    title: "Rates return",
    text: "Offers land sorted, with MC, ETA and compliance state. Nothing is auto-selected on price.",
    color: "#248f98",
  },
  {
    id: "05",
    title: "Carrier compliance",
    text: "Authority, USDOT, insurance, W9 and signature. Short of five, the dispatch sheet does not generate.",
    badge: "Blocked",
    color: "#c68a27",
  },
  {
    id: "06",
    title: "Customer credit",
    text: "Exposure counts the loads still in the air. Past the limit an approver decides, in writing.",
    badge: "Blocked",
    color: "#c85e55",
  },
  {
    id: "07",
    title: "Dispatched and tracked",
    text: "Eight milestones. Each sets a status, stamps a date, writes the audit event and tells the agent.",
    color: "#277a9a",
  },
  {
    id: "08",
    title: "Invoiced and paid",
    text: "Delivery starts both aging clocks in one transaction. An accessorial that exists is billed.",
    color: "#654ca8",
  },
];

const AUTO_MS = 4500;
const TYPE_DELAY_MS = 350;
const TYPE_SPEED_MS = 16;

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  initial: {
    opacity: 0,
    y: 28,
    scale: 0.94,
    rotateX: 8,
  },

  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },

  exit: {
    opacity: 0,
    y: -18,
    scale: 0.97,
    transition: {
      duration: 0.22,
      ease: "easeIn",
    },
  },
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =========================================================
   STEP CARD
========================================================= */

function StepCard({ card }) {
  // Starts fully typed for reduced-motion users, otherwise from 0.
  // The card is keyed by card.id, so it remounts (and resets) on every step.
  const [typed, setTyped] = useState(() =>
    prefersReducedMotion() ? card.text.length : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;

    let index = 0;
    let interval = null;

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        index += 1;

        setTyped(index);

        if (index >= card.text.length) {
          clearInterval(interval);
        }
      }, TYPE_SPEED_MS);
    }, TYPE_DELAY_MS);

    return () => {
      clearTimeout(timeout);

      if (interval) {
        clearInterval(interval);
      }
    };
  }, [card.text]);

  const done = typed >= card.text.length;

  return (
    <motion.article
      className="cc-float-card cc-float-top"
      style={{
        "--card-color": card.color,
      }}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="cc-shine" />

      <div className="cc-card-top">
        <div className="cc-card-id">
          <span className="cc-number">{card.id}</span>

          <span className="cc-live">
            <i />
            Live
          </span>
        </div>

        {card.badge && <span className="cc-badge">{card.badge}</span>}
      </div>

      <h4>{card.title}</h4>

      <p>
        <span>{card.text.slice(0, typed)}</span>

        {!done && <span className="cc-cursor" aria-hidden="true" />}

        <span className="cc-ghost">{card.text.slice(typed)}</span>
      </p>

      <div className="cc-card-footer">
        <span>Workflow</span>

        <span className="cc-arrow">↗</span>
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function CircularCarousel() {
  const [active, setActive] = useState(0);

  const total = cards.length;
  const card = cards[active];
  const next = cards[(active + 1) % total];
  const blocked = Boolean(card.badge);

  /* =======================================================
     GO TO STEP
  ======================================================= */

  const goTo = (index) => {
    setActive(((index % total) + total) % total);
  };

  /* =======================================================
     AUTO ADVANCE
     01 → 02 → 03 → ... → 08 → 01
  ======================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((current) => (current + 1) % total);
    }, AUTO_MS);

    return () => {
      clearTimeout(timer);
    };
  }, [active, total]);

  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        setActive((current) => (current + 1) % total);
      }

      if (event.key === "ArrowLeft") {
        setActive((current) => (current - 1 + total) % total);
      }

      if (event.key === "Home") {
        setActive(0);
      }

      if (event.key === "End") {
        setActive(total - 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [total]);

  return (
    <section
      className="circular-carousel"
      style={{
        "--cc-auto": `${AUTO_MS}ms`,
      }}
    >
      <div className="cc-container">
        {/* =================================================
            LEFT VISUAL
        ================================================= */}

        <motion.div
          className="cc-visual"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <div className="cc-orb cc-orb-1" />
          <div className="cc-orb cc-orb-2" />
          <div className="cc-orb cc-orb-3" />

          <div className="cc-visual-inner">
            {/* ACTIVE CARD */}

            <AnimatePresence mode="wait">
              <StepCard key={card.id} card={card} />
            </AnimatePresence>

            <div className="cc-connector" />

            {/* =================================================
                PROGRESS PILL
            ================================================= */}

            <div
              className={"cc-float-pill" + (blocked ? " cc-pill-blocked" : "")}
            >
              <span className="cc-pill-dots" aria-hidden="true">
                {cards.map((item, index) => (
                  <span
                    key={item.id}
                    className={
                      (index === active ? "cc-dot-active" : "") +
                      (index < active ? " cc-dot-done" : "")
                    }
                  />
                ))}
              </span>

              <span key={`text-${active}`} className="cc-pill-text">
                {`Step ${card.id} of ${String(total).padStart(2, "0")}`}

                {blocked ? " · This step can refuse" : ""}
              </span>

              <span key={`bar-${active}`} className="cc-pill-progress" />
            </div>

            <div className="cc-connector" />

            {/* =================================================
                UP NEXT
            ================================================= */}

            <div className="cc-float-card cc-float-bottom">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={next.id}
                  className="cc-next-row"
                  initial={{
                    opacity: 0,
                    x: 14,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -14,
                  }}
                  transition={{
                    duration: 0.28,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="cc-avatar"
                    style={{
                      "--card-color": next.color,
                    }}
                  >
                    {next.id}
                  </div>

                  <div className="cc-outcome">
                    <span className="cc-outcome-label">Up next</span>

                    <span className="cc-outcome-title">{next.title}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            RIGHT COPY
        ================================================= */}

        <motion.div
          className="cc-copy"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
        >
          <span className="cc-eyebrow">The sequence</span>

          <h2 className="cc-heading">
            Eight steps.
            <br />
            Two of them refuse.
          </h2>

          <p className="cc-desc">
            Every step stays connected, so the work moves forward without
            duplicate entry.
          </p>

          {/* =================================================
              STEP BUTTONS
          ================================================= */}

          <div className="cc-steps" role="tablist" aria-label="Workflow steps">
            {cards.map((item, index) => {
              const isActive = index === active;
              const isDone = index < active;

              const className = [
                "cc-step",
                isActive ? "cc-step-active" : "",
                isDone ? "cc-step-done" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Step ${item.id}: ${item.title}`}
                  className={className}
                  style={{
                    "--card-color": item.color,
                  }}
                  onClick={() => goTo(index)}
                >
                  <span className="cc-step-tag">{item.id}</span>

                  <span className="cc-step-title">{item.title}</span>

                  {item.badge && (
                    <span className="cc-step-badge">{item.badge}</span>
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
