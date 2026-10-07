import { useEffect, useRef, useState } from "react";
import "./HomeDemo.css";

const ITEMS = [
  {
    kind: "policy",
    title: "Server-side only",
    badge: "Audited",
    headline: "Server-side only.",
    body: "No credential reaches the client bundle. Every outbound call is written to the audit log, and simulated data is always labelled simulated.",
  },
  {
    mono: "FM",
    title: "FMCSA QCMobile",
    category: "Carrier data",
    body: "Reads authority, insurance and safety rating by docket number.",
  },
  {
    mono: "DAT",
    title: "DAT",
    category: "Load boards",
    body: "Posts a load and returns the lane's rate history.",
  },
  {
    mono: "SA",
    title: "Samsara",
    category: "Tracking",
    body: "Pulls tractor positions against the load's stops.",
  },
  {
    mono: "P44",
    title: "Project44",
    category: "Ocean tracking",
    body: "Watches vessel and container milestones for the free-day clock.",
  },
];

const ALSO = [
  "Truckstop",
  "Loadmatch",
  "Ferry booking",
  "SAFER",
  "Highway",
  "RMIS",
  "Motive",
  "Geotab",
  "Google Maps",
  "PC Miler",
  "DocuSign",
  "Twilio SMS",
  "QuickBooks",
  "Stripe",
];

const SCENE_MS = 6000;
const FADE_MS = 350;

const PATHS = {
  lock: "M6 11h12v10H6zM8 11V7a4 4 0 018 0v4",
  check: "M5 12l5 5 10-10",
  up: "M7 17L17 7M8 7h9v9",
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

export default function NothingSwitchedOn({ className = "" }) {
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
  const item = ITEMS[active];

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
      setActive((a) => (a + 1) % ITEMS.length);
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
    <section ref={rootRef} className={`nso ${className}`}>
      <div className="nso-copy">
        <div>
          <div className="nso-brand">
            <span className="nso-logo">10</span>
            Phase ten
          </div>
          <h2 className="nso-h">Nothing is switched on by default.</h2>
          <p className="nso-intro">
            <span className="nso-pill">Not live yet</span>
            This is the directory, not a claim that a connection exists today.
          </p>
        </div>

        <ul className="nso-tabs">
          {ITEMS.map((d, i) => {
            const on = i === active;
            return (
              <li
                key={d.title}
                className="nso-tab"
                data-active={on}
                data-done={i < active}
              >
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => select(i)}
                >
                  <span className="nso-th">
                    {d.mono ? (
                      <span className="nso-mono">{d.mono}</span>
                    ) : (
                      <Icon n="lock" size={16} />
                    )}
                    {d.title}
                    {d.category && <em>{d.category}</em>}
                  </span>
                  <span className="nso-tb">
                    <span>
                      <span className="nso-body">{d.body}</span>
                    </span>
                  </span>
                </button>
                <span className="nso-go">
                  <Icon n="up" size={13} />
                </span>
                {on && !reduced && (
                  <span
                    key={`${run}-${inView}`}
                    className="nso-prog"
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
      </div>

      <div className="nso-card" data-scene={active}>
        <div className="nso-glow" />
        <div
          key={sceneKey}
          className={`nso-scene${leaving ? " is-leaving" : ""}`}
        >
          <div className="nso-glass nso-main nso-pop">
            {item.kind === "policy" ? (
              <>
                <span className="nso-badge">
                  <Icon n="check" size={11} sw={3.2} />
                  {item.badge}
                </span>
                <h4>{item.headline}</h4>
              </>
            ) : (
              <div className="nso-id">
                <span className="nso-mono nso-mono--lg">{item.mono}</span>
                <div>
                  <h4>{item.title}</h4>
                  <span className="nso-cat">{item.category}</span>
                </div>
              </div>
            )}
            <p>{item.body}</p>
          </div>

          <div className="nso-glass nso-also nso-slide">
            <b>Also in the directory</b>
            <div className="nso-chips">
              {ALSO.map((c, i) => (
                <span
                  className="nso-chip"
                  key={c}
                  style={{ animationDelay: `${0.5 + i * 0.05}s` }}
                >
                  {c}
                </span>
              ))}
            </div>
            <a className="nso-link" href="#directory">
              The whole directory <Icon n="up" size={14} sw={2.2} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
