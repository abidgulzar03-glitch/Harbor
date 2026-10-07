import { useEffect, useRef, useState } from "react";
import "./ProblemSectionTheLoop.css";

const features = [
  {
    icon: "board",
    title: "The load board",
    description:
      "Container, lane, weight, dates. Every load starts here, entered by hand from an email, a call, or a customer portal.",
    risk: "One wrong digit in the container number and everything downstream inherits it.",
    subFeatures: ["Container", "Lane", "Weight", "Dates"],
  },
  {
    icon: "sheet",
    title: "The spreadsheet",
    description:
      "The same box, with the rate beside it. Dispatch or pricing copies the container over and adds the agreed rate in a separate file.",
    risk: "Rates get updated in one place and forgotten in another.",
    subFeatures: ["Box number", "Rate"],
  },
  {
    icon: "invoice",
    title: "The invoice",
    description:
      "Typed from the sheet, or from memory. Accounting rebuilds the load details again to bill the customer.",
    risk: "Accessorials, detention and last-minute changes often never make it onto the bill.",
    subFeatures: ["From sheet", "From memory"],
  },
  {
    icon: "statement",
    title: "The statement",
    description:
      "Assembled at month end from all three. Someone reconciles the board, the sheet and the invoices line by line.",
    risk: "Mismatches surface weeks later, when customers are already asking questions.",
    subFeatures: ["Load", "Rate", "Invoice"],
  },
];

const SCENE_MS = 6000; // time each step stays active
const FADE_MS = 350;

const PATHS = {
  board: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  sheet: "M4 4h16v16H4zM4 10h16M4 15h16M10 4v16",
  invoice: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
  statement: "M5 3h10l4 4v14H5zM14 3v5h5M9 13h6M9 17h6",
  up: "M7 17L17 7M8 7h9v9",
  alert:
    "M12 8v5M12 17h.01M10.3 3.9L2.4 18a2 2 0 001.7 3h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z",
  loop: "M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3",
};

function Icon({ n, size = 16, sw = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[n]} />
    </svg>
  );
}

export default function ProblemSectionTheLoop({ className = "" }) {
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const [leaveKey, setLeaveKey] = useState("");
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const rootRef = useRef(null);

  const sceneKey = `${active}-${run}`;
  const leaving = leaveKey === sceneKey;
  const current = features[active];

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (e) => setReduced(e.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(rootRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || reduced) return undefined;
    const t1 = setTimeout(() => setLeaveKey(sceneKey), SCENE_MS - FADE_MS);
    const t2 = setTimeout(() => {
      setActive((a) => (a + 1) % features.length);
      setRun((r) => r + 1);
    }, SCENE_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, run, inView, reduced, sceneKey]);

  const select = (i) => {
    setActive(i);
    setRun((r) => r + 1);
  };

  return (
    <section ref={rootRef} className={`psl ${className}`}>
      <div className="psl-copy">
        <div>
          <div className="psl-brand">
            <span className="psl-logo">
              <Icon n="loop" size={14} />
            </span>
            The problem
          </div>
          <h2 className="psl-h">
            Most brokerages key the same container four times
          </h2>
          <p className="psl-intro">
            Every load passes through four different tools, and each one asks
            your team to type the same details again. It is slow, it is
            error-prone, and it is the reason month end takes days instead of
            minutes.
          </p>
        </div>

        <ul className="psl-tabs">
          {features.map((f, i) => {
            const on = i === active;
            return (
              <li
                key={f.title}
                className="psl-tab"
                data-active={on}
                data-done={i < active}
              >
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => select(i)}
                >
                  <span className="psl-th">
                    <Icon n={f.icon} size={16} />
                    {f.title}
                  </span>
                  <span className="psl-tb">
                    <span>
                      <span className="psl-body">{f.description}</span>
                      <span className="psl-risk">{f.risk}</span>
                    </span>
                  </span>
                </button>
                <span className="psl-go">
                  <Icon n="up" size={13} />
                </span>
                {on && !reduced && (
                  <span
                    key={`${run}-${inView}`}
                    className="psl-prog"
                    style={{
                      animationDuration: `${SCENE_MS}ms`,
                      animationPlayState: inView ? "running" : "paused",
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        <p className="psl-summary">
          Four entries means four chances for a typo, a missed rate, or a load
          that never gets billed. The Loop captures it once and carries it
          through every step.
        </p>
      </div>

      <div className="psl-card" data-scene={active}>
        <div className="psl-glow" />
        <div className="psl-stripes">
          <div />
          <div />
        </div>

        <div
          key={sceneKey}
          className={`psl-scene${leaving ? " is-leaving" : ""}`}
        >
          <div className="psl-glass psl-shot psl-pop">
            <img src="/Theloop-img-1.jpg" alt="The Loop platform" />
          </div>

          <div className="psl-glass psl-detail psl-slide">
            <div className="psl-dhead">
              <span className="psl-ic">
                <Icon n={current.icon} size={15} />
              </span>
              <h4>{current.title}</h4>
              <span className="psl-count">
                {active + 1} of {features.length}
              </span>
            </div>

            <div className="psl-chips">
              {current.subFeatures.map((s, i) => (
                <span
                  className="psl-chip"
                  key={s}
                  style={{ animationDelay: `${0.5 + i * 0.12}s` }}
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="psl-warn">
              <Icon n="alert" size={15} />
              <span>{current.risk}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
