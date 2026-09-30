import { useState, useEffect, useRef, useCallback } from "react";
import {
  Truck,
  Bell,
  ShieldAlert,
  FileWarning,
  X,
  AlertCircle,
} from "lucide-react";
import "./ScrollDemo.css";

const TABS = ["detention", "advances", "compliance", "documents"];

const TITLES = {
  detention: "Detention",
  advances: "Advances",
  compliance: "Compliance",
  documents: "Documents",
};

const COPY = {
  detention: {
    badge: "Detention Tracking",
    h1: "Stop losing money to detention and demurrage",
    p: "Track every free day on every container automatically, so nothing slips past the last free day unnoticed.",
  },
  advances: {
    badge: "Quick Pay",
    h1: "Catch advance shorts before they cost you",
    p: "See exactly which wires are short, why, and who has to release them — before it becomes a dispute.",
  },
  compliance: {
    badge: "Carrier Compliance",
    isNew: true,
    h1: "Automatic holds the moment compliance lapses",
    p: "Expired insurance or missing paperwork puts a carrier on hold instantly, so dispatch never ships on a lapsed policy.",
  },
  documents: {
    badge: "Proof of Delivery",
    isNew: true,
    h1: "Never chase down a missing POD again",
    p: "Flag missing paperwork the moment a load delivers, so invoices don't stall waiting on a signature.",
  },
};

const GROW_END = 0.14;
const PANEL_END = 0.94;

const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max);

export default function ScrollDemo() {
  const stageRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const measure = () => {
      frame = null;
      const el = stageRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      if (total <= 0) {
        setProgress(0);
        return;
      }
      setProgress(clamp(-rect.top / total));
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const grow =
    clamp(progress / GROW_END) *
    (1 - clamp((progress - PANEL_END) / (1 - PANEL_END)));

  const span = PANEL_END - GROW_END;
  const panelPos = clamp((progress - GROW_END) / span);
  const index = Math.min(TABS.length - 1, Math.floor(panelPos * TABS.length));
  const tab = TABS[index];

  const colorProgress = clamp((progress - GROW_END) / span);

  const goTo = useCallback(
    (i) => {
      const el = stageRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const target =
        top + total * (GROW_END + ((i + 0.5) / TABS.length) * span);
      window.scrollTo({ top: target, behavior: "smooth" });
    },
    [span],
  );

  const handleClose = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;

    const top = el.getBoundingClientRect().top + window.scrollY;
    const target = top + el.offsetHeight;

    window.scrollTo({ top: target, behavior: "smooth" });
  }, []);

  const copy = COPY[tab];

  return (
    <div className="scroll-stage" ref={stageRef}>
      <div className="scroll-pin">
        <section
          className="demo-wrapper"
          data-tab={tab}
          style={{
            "--grow": grow,
            "--color": colorProgress,
          }}
        >
          {/* Background layers – one per tab, crossfaded on scroll */}
          <div className="demo-bgs" aria-hidden="true">
            {TABS.map((name) => (
              <span
                key={name}
                className={`demo-bg bg-${name}${tab === name ? " is-active" : ""}`}
              />
            ))}
          </div>

          {/* Close button */}
          <button
            className="demo-close"
            onClick={handleClose}
            aria-label="Close demo"
          >
            <X size={19} />
          </button>

          {/* Tab icons */}
          <div className="demo-icons">
            {TABS.map((name, i) => {
              const Icon = [Truck, Bell, ShieldAlert, FileWarning][i];
              return (
                <button
                  key={name}
                  className={tab === name ? "active" : ""}
                  onClick={() => goTo(i)}
                  aria-label={TITLES[name]}
                  aria-pressed={tab === name}
                >
                  <Icon size={22} />
                </button>
              );
            })}
          </div>

          <div className="demo-card">
            {/* Left content */}
            <div className="demo-left">
              <span className="badge-row">
                <span className="badge">{copy.badge}</span>
                {copy.isNew && <span className="new-pill">New</span>}
              </span>

              <h1>{copy.h1}</h1>

              <p>{copy.p}</p>

              <a href="/">Learn more →</a>
            </div>

            {/* Right panel */}
            <div className="demo-right">
              {tab === "detention" && (
                <div key="detention" className="detention-ui fade">
                  <div className="exception-card">
                    <div className="exception-title">MSMU 461 5308</div>
                    <span className="pill pill-danger">
                      <AlertCircle size={12} /> Last free day passed
                    </span>
                    <div className="detention-bar">
                      <span className="fill" />
                      <span className="fill" />
                      <span className="fill" />
                      <span className="fill" />
                      <span className="fill" />
                      <span className="fill danger" />
                    </div>
                    <div className="detention-meta">
                      <span>Five free days used</span>
                      <strong>$275.00 / day</strong>
                    </div>
                  </div>
                </div>
              )}

              {tab === "advances" && (
                <div key="advances" className="advances-ui fade">
                  <div className="exception-card exception-card-dark">
                    <span className="pill pill-gold">
                      <AlertCircle size={12} /> Advance short
                    </span>
                    <div className="advance-amount">$1,240.00</div>
                    <div className="advance-reason">
                      Short of the wire on file
                    </div>
                    <div className="advance-note">
                      Only the owner can release it.
                    </div>
                  </div>
                </div>
              )}

              {tab === "compliance" && (
                <div key="compliance" className="compliance-ui fade">
                  <div className="exception-card">
                    <div className="exception-title">Bay State Cartage</div>
                    <div className="exception-subtitle">MC 738214</div>
                    <span className="pill pill-danger">
                      <AlertCircle size={12} /> Held
                    </span>
                    <div className="compliance-reason">
                      Insurance expired. Dispatch paperwork will not generate.
                    </div>
                  </div>
                </div>
              )}

              {tab === "documents" && (
                <div key="documents" className="documents-ui fade">
                  <div className="exception-card">
                    <div className="exception-title">Load #48219</div>
                    <div className="exception-subtitle">Bay State Cartage</div>
                    <span className="pill pill-danger">
                      <AlertCircle size={12} /> POD missing
                    </span>
                    <div className="compliance-reason">
                      Delivered 2 days ago. Invoice can't be sent until the
                      proof of delivery is uploaded.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
