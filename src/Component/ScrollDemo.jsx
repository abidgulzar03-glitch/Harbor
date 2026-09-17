import { useState, useEffect, useRef, useCallback } from "react";
import {
  Calendar,
  Sparkles,
  BookOpen,
  Wallet,
  X,
  Clock,
  Video,
} from "lucide-react";
import "./ScrollDemo.css";

const TABS = ["schedule", "assistant", "notes", "payment"];

const TITLES = {
  schedule: "Scheduling",
  assistant: "Assistant",
  notes: "Notes",
  payment: "Payments",
};

const COPY = {
  schedule: {
    badge: "Scheduling",
    h1: "Book meetings with the world's #1 scheduling tool",
    p: "Giving you complete control and total customization. Beautiful booking pages with powerful scheduling.",
  },
  assistant: {
    badge: "Callie Beta",
    h1: "Introducing your 24/7 AI scheduling assistant",
    p: "Add Callie to any email thread to coordinate scheduling on your behalf without switching tools or sacrificing control.",
  },
  notes: {
    badge: "Notetaker",
    isNew: true,
    h1: "Actionable, shareable recaps for every meeting",
    p: "Finish the day knowing every meeting was captured, next steps were tracked, and follow-ups were handled.",
  },
  payment: {
    badge: "Payments",
    isNew: true,
    h1: "Flexible, built-in payment tools",
    p: "Charge upfront for meetings, sell packages, and send invoices with payment features that make it easy to get paid.",
  },
};

const GROW_END = 0.14;
const PANEL_END = 0.94;

const clamp = (v, min = 0, max = 1) => Math.min(Math.max(v, min), max);

const EMAIL_BODY_TEXT =
  "Callie, can you help us find 30 minutes this week? Mornings only, please";

function TypingText({ text, speed = 55, className }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const id = setTimeout(() => setShown(text), 0);
      return () => clearTimeout(id);
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);

    return () => clearInterval(id);
  }, [text, speed]);

  return (
    <p className={className}>
      {shown}
      <span className="cursor" aria-hidden="true">
        |
      </span>
    </p>
  );
}

export default function ScrollDemo() {
  const stageRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [payStep, setPayStep] = useState(0);

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

  // Multi-step animation cycle for the Payment card
  useEffect(() => {
    const interval = setInterval(() => {
      setPayStep((prev) => (prev + 1) % 3);
    }, 3200);
    return () => clearInterval(interval);
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
          style={{
            "--grow": grow,
            "--color": colorProgress,
          }}
        >
          {/* Close button */}
          <button
            className="demo-close"
            onClick={handleClose}
            aria-label="Close demo"
          >
            <X size={18} />
          </button>

          {/* Tab icons */}
          <div className="demo-icons">
            {TABS.map((name, i) => {
              const Icon = [Calendar, Sparkles, BookOpen, Wallet][i];
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
                <span className="badge">
                  {tab === "payment" && <Wallet size={14} className="mr-1" />}
                  {copy.badge}
                </span>
                {copy.isNew && <span className="new-pill">New</span>}
              </span>

              <h1>{copy.h1}</h1>

              <p>{copy.p}</p>

              <a href="/">Learn more →</a>
            </div>

            {/* Right panel */}
            <div className="demo-right">
              {/* ===== SCHEDULE ===== */}
              {tab === "schedule" && (
                <div key="schedule" className="calendar-ui fade">
                  <div className="cal-shapes">
                    <span className="shape shape-1"></span>
                    <span className="shape shape-2"></span>
                    <span className="shape shape-3"></span>
                    <span className="shape shape-4"></span>
                  </div>

                  <div className="cal-left">
                    <div className="cal-header">
                      <button className="cal-nav" aria-label="Previous month">
                        ‹
                      </button>
                      <h3>July 2026</h3>
                      <button className="cal-nav" aria-label="Next month">
                        ›
                      </button>
                    </div>

                    <div className="weekdays">
                      {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map(
                        (d) => (
                          <span key={d}>{d}</span>
                        ),
                      )}
                    </div>

                    <div className="days">
                      <span className="pad"></span>
                      <span className="pad"></span>
                      <span className="pad"></span>

                      {Array.from({ length: 31 }).map((_, i) => (
                        <span
                          key={i}
                          className={i + 1 === 14 ? "selected" : ""}
                        >
                          {i + 1}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="cal-right">
                    <div className="cal-day-info">
                      <strong>Thursday</strong>
                      <span>July 14, 2026</span>
                    </div>

                    <div className="times">
                      <button className="time-btn">12:30 PM</button>
                      <button className="time-btn">2:30 PM</button>
                      <button className="time-btn booked">✓ Booked</button>
                    </div>
                  </div>
                </div>
              )}

              {/* ===== ASSISTANT ===== */}
              {tab === "assistant" && (
                <div key="assistant" className="assistant-ui fade">
                  <div className="assistant-bg">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="email-card">
                    <div className="email-header">
                      <div className="avatar">DM</div>
                      <div className="email-meta">
                        <strong>Dominic Mills</strong>
                        <span>To Callie, Tori Mathers</span>
                      </div>
                    </div>

                    <TypingText
                      key="assistant-email-typing"
                      text={EMAIL_BODY_TEXT}
                      speed={28}
                      className="email-body"
                    />
                  </div>
                </div>
              )}

              {/* ===== NOTES ===== */}
              {tab === "notes" && (
                <div key="notes" className="notes-ui fade">
                  <div
                    className="notes-bars notes-bars-left"
                    aria-hidden="true"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div
                    className="notes-bars notes-bars-right"
                    aria-hidden="true"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="note-card">
                    <div className="note-row">
                      <div className="note-avatar note-avatar-a">
                        <img src="/hero-1.jpg" alt="JD" />
                      </div>
                      <div className="note-content">
                        <div className="note-title-row">
                          Q2 Hiring Review
                          <svg
                            viewBox="0 0 24 24"
                            width="13"
                            height="13"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m18 2 4 4-14 14H4v-4Z" />
                          </svg>
                        </div>
                        <div className="note-label">Recap</div>
                        <div className="note-lines">
                          <span style={{ width: "92%" }}></span>
                          <span style={{ width: "78%" }}></span>
                          <span style={{ width: "62%" }}></span>
                        </div>
                      </div>
                    </div>

                    <div className="note-row">
                      <div className="note-avatar note-avatar-b">
                        <img src="/hero-2.jpg" alt="JD" />
                      </div>
                      <div className="note-content">
                        <div className="note-label">
                          Action Items <span className="note-count">4</span>
                        </div>
                        <div className="note-lines">
                          <span style={{ width: "85%" }}></span>
                          <span style={{ width: "70%" }}></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ===== PAYMENT ===== */}
              {tab === "payment" && (
                <div key="payment" className="payment-ui fade">
                  <div className="pay-shapes">
                    <span className="pay-shape pay-shape-1"></span>
                    <span className="pay-shape pay-shape-2"></span>
                  </div>

                  {/* STEP 0: Initial Consultation Toggle Card */}
                  {payStep === 0 && (
                    <div key="step-0" className="payment-card-step fade-step">
                      <h3>Consultation</h3>
                      <div className="consult-details">
                        <span>
                          <Clock size={15} /> 45 min
                        </span>
                        <span>
                          <Video size={15} /> Zoom
                        </span>
                      </div>
                      <div className="toggle-row">
                        <span>Require payment to book</span>
                        <div className="toggle-switch active">
                          <div className="toggle-knob"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 1: Amount & Processor Settings */}
                  {payStep === 1 && (
                    <div key="step-1" className="payment-card-step fade-step">
                      <div className="field-group">
                        <label>Amount to collect</label>
                        <div className="input-row">
                          <span className="currency-symbol">$</span>
                          <input type="text" value="100" readOnly />
                          <div className="select-badge">USD ▾</div>
                        </div>
                      </div>
                      <div className="field-group">
                        <label>Payment processor</label>
                        <div className="select-row">
                          <span>Stripe</span>
                          <span>▾</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Payment Summary View */}
                  {payStep === 2 && (
                    <div
                      key="step-2"
                      className="payment-card-step fade-step consult-card-step"
                    >
                      <div className="avatar-circle">
                        <img
                          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                          alt="Damian Ellis"
                        />
                      </div>
                      <h3>Consultation</h3>
                      <div className="consult-price">$100</div>
                      <div className="consult-powered">Powered by stripe</div>
                      <div className="consult-meta">
                        <span>
                          <Clock size={15} /> 45 min
                        </span>
                        <span>
                          <Video size={15} /> Zoom
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
