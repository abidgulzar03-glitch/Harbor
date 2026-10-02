import { useState, useEffect, useRef, useCallback } from "react";
import "./CalendlyFeatureScroll.css";

/* ================= LEFT: FEATURES ================= */

const Icon = ({ children }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {children}
  </svg>
);

const features = [
  {
    id: 0,
    icon: (
      <Icon>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </Icon>
    ),
    title: "The last free day",
    description: "A date in a column. Somebody notices the morning after.",
  },
  {
    id: 1,
    icon: (
      <Icon>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M7 8h10M7 12h7M7 16h5" />
      </Icon>
    ),
    title: "The advance you wired",
    description: "A note in an email thread. Month-end finds out.",
  },
  {
    id: 2,
    icon: (
      <Icon>
        <path d="M4 5h16M4 12h16M4 19h16" />
        <circle cx="8" cy="5" r="1.5" />
        <circle cx="14" cy="12" r="1.5" />
        <circle cx="10" cy="19" r="1.5" />
      </Icon>
    ),
    title: "The accessorial",
    description: "Two hours' detention, typed into the remarks column.",
  },
  {
    id: 3,
    icon: (
      <Icon>
        <path d="M5 20V10M12 20V4M19 20v-7" />
      </Icon>
    ),
    title: "The ageing report",
    description:
      "A pivot table rebuilt every Monday. Calls go to the loudest account.",
  },
];

/* ================= RIGHT: PANELS ================= */

const panels = [
  <>
    <h3>The clock runs itself</h3>
    <p className="muted lead">Approaching warns. Passed is a hard exception.</p>

    <div className="setting-row">
      <div className="select-box">Approaching</div>
      <span>Warning</span>
    </div>
    <div className="setting-row">
      <div className="select-box">Passed</div>
      <span>Hard exception</span>
    </div>

    <div className="schedule-label">Demurrage rebills onto the load.</div>
    <div className="schedule">
      <div className="day">
        <span className="dot">✓</span>Approaching warning
      </div>
      <div className="day">
        <span className="dot">!</span>Hard exception
      </div>
      <div className="day">
        <span className="dot">↻</span>Rebill to load
      </div>
    </div>
  </>,

  <>
    <h3>One record per advance</h3>
    <div className="email-box">
      <div className="email-icon">◆</div>
      <p className="muted">
        The box is not released until principal and fee land in full.
      </p>
    </div>
    <div className="setting-row">
      <div className="select-box">Reference</div>
      <span>Recorded</span>
    </div>
    <div className="setting-row">
      <div className="select-box">Amount</div>
      <span>Recorded</span>
    </div>
    <div className="setting-row">
      <div className="select-box">Date</div>
      <span>Recorded</span>
    </div>
  </>,

  <>
    <h3>Every charge is billed</h3>
    <div className="email-box">
      <div className="email-icon">✓</div>
      <p className="muted">A charge carries the party it is billed to.</p>
    </div>
    <div className="setting-row">
      <div className="select-box">Charge</div>
      <span>Party assigned</span>
    </div>
    <div className="setting-row">
      <div className="select-box">Invoice</div>
      <span>Charge included</span>
    </div>
    <button type="button" className="secondary-btn">
      Invoice builder reads the charges
    </button>
  </>,

  <>
    <h3>Ageing, computed once</h3>
    <div className="user-list">
      {[
        ["0", "Current", "Open", "member"],
        ["1", "1–30", "Ageing", "member"],
        ["3", "31–60", "Ageing", "viewer"],
        ["6", "60+", "Priority", "admin"],
      ].map(([n, name, label, tone]) => (
        <div className="user-row" key={name}>
          <div className="avatar">{n}</div>
          <span className="name">{name}</span>
          <span className={`row-badge ${tone}`}>{label}</span>
        </div>
      ))}
    </div>
    <button type="button" className="secondary-btn">
      Worklist ordered by what is worth ringing about
    </button>
  </>,
];

/* ================= MAIN ================= */

const AUTO_MS = 2800;
const SCROLL_PAUSE_MS = 6000;
const HOVER_RESUME_MS = 1500;

export default function CalendlyFeatureScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const featureRefs = useRef([]);
  const resumeTimer = useRef(null);
  const hasScrolled = useRef(false);

  const pauseFor = useCallback((ms) => {
    clearTimeout(resumeTimer.current);
    setIsPaused(true);
    if (ms) {
      resumeTimer.current = setTimeout(() => setIsPaused(false), ms);
    }
  }, []);

  /* autoplay */
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isPaused || reduce) return;

    const id = setInterval(
      () => setActiveIndex((p) => (p + 1) % features.length),
      AUTO_MS,
    );
    return () => clearInterval(id);
  }, [isPaused]);

  /* scroll sync (single observer, ignores initial load) */
  useEffect(() => {
    const onScroll = () => (hasScrolled.current = true);
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !hasScrolled.current) return;
          setActiveIndex(Number(entry.target.dataset.index));
          pauseFor(SCROLL_PAUSE_MS);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    featureRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
      clearTimeout(resumeTimer.current);
    };
  }, [pauseFor]);

  return (
    <section className="cfs">
      <div className="cfs-content">
        {/* LEFT */}
        <div className="cfs-left">
          <div className="sticky-header">
            <div className="eyebrow">
              <span />
              The alternative
            </div>

            <h1>A spreadsheet leaks quietly. A general TMS leaks elsewhere.</h1>
          </div>

          <div className="features-subtitle">
            <span className="features-subtitle-label">
              {/* Four places it slips */}
            </span>
            <p>
              A general TMS invoices and chases what is outstanding — two of the
              four below. The other two only exist because there is a container
              on a chassis.
            </p>
          </div>

          <div className="features-list">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                data-index={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className={`feature-item ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  pauseFor(0);
                }}
                onMouseLeave={() => pauseFor(HOVER_RESUME_MS)}
              >
                <div className="feature-header">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="cfs-right">
          <div className="blue-card">
            <div className="what-harbor">What Harbor does instead</div>

            <div className="card-stage">
              {panels.map((panel, i) => (
                <div
                  key={i}
                  className={`panel ${activeIndex === i ? "is-active" : ""}`}
                  aria-hidden={activeIndex !== i}
                >
                  {panel}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
