import { useState, useEffect, useRef } from "react";
import "./CalendlyFeatureScroll.css";

const features = [
  {
    id: 0,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Full control over your calendar",
    description:
      "Connect your calendars, set your hours, and control exactly when you’re available to meet.",
  },
  {
    id: 1,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Meeting templates for every scenario",
    description:
      "From one-on-one calls to multi-host meetings, pre-built event types make scheduling easy for everyone.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Automated email & text workflows",
    description:
      "Reduce no-shows with personalized email and text reminders, and let invitees reschedule when needed without the back-and-forth.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Website embeds and routing forms",
    description:
      "Let visitors schedule right from your website. Add routing forms to qualify leads and match them with the right team member.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: "Scheduling whenever, wherever",
    description:
      "Access Calendly from the mobile app or browser extension, or use it with your favorite AI tool, LinkedIn, or 150+ other integrations.",
  },
  {
    id: 5,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Tools for teams of all sizes",
    description:
      "Grow your business with scheduling that scales. Add teammates, set permissions, and manage access without switching tools.",
  },
];

const CardContent = ({ activeIndex }) => {
  const contents = [
    // 0 - Availability
    <div className="card-inner">
      <h3>Availability</h3>
      <div className="setting-row">
        <div className="select-box">0</div>
        <span>Meetings per day</span>
      </div>
      <div className="setting-row">
        <div className="select-box">15 min</div>
        <span>Meeting Buffer Time</span>
        <div className="toggle"></div>
      </div>
      <div className="schedule-label">Schedule: Custom ▾</div>
      <div className="schedule">
        <div className="day">
          <span className="dot-s">M</span> 9:00am – 5:00pm
        </div>
        <div className="day">
          <span className="dot-s">T</span> 9:00am – 5:00pm
        </div>
        <div className="day">
          <span className="dot-s">W</span> 9:00am – 5:00pm
        </div>
      </div>
    </div>,

    // 1 - New Meeting
    <div className="card-inner center">
      <button className="new-meeting-btn">+ New Meeting</button>
    </div>,

    // 2 - Workflow
    <div className="card-inner">
      <div className="workflow-label">Workflow</div>
      <div className="email-box">
        <div className="email-icon">✉</div>
        <h3>Send email reminder</h3>
        <p className="muted">24 hours before event starts</p>
      </div>
      <button className="secondary-btn">Send email to invitees</button>
    </div>,

    // 3 - Get a demo
    <div className="card-inner">
      <div className="integration-logos">
        <div className="int-logo">☁</div>
        <div className="int-logo orange">hub</div>
        <div className="int-logo purple">|||</div>
      </div>
      <h3>Get a demo</h3>
      <input className="demo-input" placeholder="Work email" />
      <input className="demo-input" placeholder="Company Size" />
    </div>,

    // 4 - Integrations Network
    <div className="card-inner center">
      <div className="network">
        <div className="center-c">©</div>
        <div className="node node-1">31</div>
        <div className="node node-2">in</div>
        <div className="node node-3">📹</div>
        <div className="node node-4">☁</div>
        <div className="node node-5">⚡</div>
      </div>
    </div>,

    // 5 - Admin Management
    <div className="card-inner">
      <h3>Admin Management</h3>
      <div className="user-list">
        <div className="user-row">
          <div className="avatar">DM</div>
          <span className="name">Dominic Mills</span>
          <span className="badge admin">Admin</span>
          <div className="toggle on"></div>
        </div>
        <div className="user-row">
          <div className="avatar">EK</div>
          <span className="name">Emily Kim</span>
          <span className="badge member">Member</span>
          <div className="toggle on"></div>
        </div>
        <div className="user-row">
          <div className="avatar">LH</div>
          <span className="name">Lars Hansen</span>
          <span className="badge viewer">Viewer</span>
          <div className="toggle"></div>
        </div>
      </div>
    </div>,
  ];

  return (
    <div className="card-content" key={activeIndex}>
      {contents[activeIndex]}
    </div>
  );
};

export default function CalendlyFeatureScroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const featureRefs = useRef([]);
  const intervalRef = useRef(null);

  // Auto Animation
  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 2800); // Change every 2.8 seconds

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  // Optional: Still support scroll (you can remove this if you only want auto)
  useEffect(() => {
    const observers = [];

    featureRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(index);
            // Pause auto animation when user scrolls
            setIsPaused(true);
            // Resume after 6 seconds of no interaction
            setTimeout(() => setIsPaused(false), 6000);
          }
        },
        {
          root: null,
          rootMargin: "-40% 0px -40% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="calendly-section">
      <div className="content">
        {/* LEFT SIDE */}
        <div className="left-side">
          <div className="sticky-header">
            <div className="badge">
              <span>📅</span> Scheduling
            </div>
            <h1>
              A better way to book your
              <br />
              meetings
            </h1>
          </div>

          <div className="features-list">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => (featureRefs.current[index] = el)}
                className={`feature-item ${activeIndex === index ? "active" : ""}`}
                onMouseEnter={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                }}
                onMouseLeave={() => setIsPaused(false)}
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

        {/* RIGHT SIDE */}
        <div className="right-side">
          <div className="blue-card">
            <CardContent activeIndex={activeIndex} />
          </div>
        </div>
      </div>
    </div>
  );
}
