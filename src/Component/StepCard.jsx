import "./StepCard.css";

// Small inline SVG icons. Colors come from `currentColor` unless noted.
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const CallieIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M12 2.5c.9 5.6 3.9 8.6 9.5 9.5-5.6.9-8.6 3.9-9.5 9.5-.9-5.6-3.9-8.6-9.5-9.5 5.6-.9 8.6-3.9 9.5-9.5Z" />
  </svg>
);

const HourglassIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9" />
  </svg>
);

const CardIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M3 10h18M7 15h3" />
  </svg>
);

const ContactIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" />
  </svg>
);

const NotetakerIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14Z" />
    <path d="M5 19 13 11" />
  </svg>
);

const MuteIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M12 3a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3Z" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3M4 4l16 16" />
  </svg>
);

const SearchSparkIcon = ({ size = 16 }) => (
  <svg {...base} width={size} height={size}>
    <circle cx="10" cy="11" r="6" />
    <path d="m15 16 5 5" />
  </svg>
);

const SendIcon = ({ size = 14 }) => (
  <svg {...base} width={size} height={size}>
    <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" />
  </svg>
);

// Brand-style marks (fixed colors)
const GmailIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path fill="#4285f4" d="M2 6.5V19a1 1 0 0 0 1 1h3.5V10.5L2 6.5Z" />
    <path fill="#34a853" d="M17.5 20H21a1 1 0 0 0 1-1V6.5l-4.5 4V20Z" />
    <path
      fill="#fbbc04"
      d="M17.5 4.5v6L22 6.5V5.7c0-2-2.3-3.1-3.9-1.9l-.6.7Z"
    />
    <path fill="#ea4335" d="M6.5 10.5v-6L12 8.7l5.5-4.2v6L12 14.7l-5.5-4.2Z" />
    <path fill="#c5221f" d="M2 5.7v.8l4.5 4v-6l-.6-.7C4.3 2.6 2 3.7 2 5.7Z" />
  </svg>
);

const OutlookIcon = ({ size = 22 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <rect x="9" y="5" width="13" height="14" rx="2" fill="#28a8ea" />
    <path d="m9.5 7 6 4.5L21.5 7" fill="none" stroke="#fff" strokeWidth="1.3" />
    <rect x="2" y="6.5" width="12" height="11" rx="2" fill="#0a63d4" />
    <ellipse
      cx="8"
      cy="12"
      rx="2.6"
      ry="3.1"
      fill="none"
      stroke="#fff"
      strokeWidth="1.6"
    />
  </svg>
);

const ICONS = {
  callie: CallieIcon,
  hourglass: HourglassIcon,
  card: CardIcon,
  contact: ContactIcon,
  notetaker: NotetakerIcon,
};

// Renders a named icon, or falls back to plain text (e.g. "01").
function Icon({ name, size }) {
  const Cmp = ICONS[name];
  return Cmp ? <Cmp size={size} /> : <>{name}</>;
}

export default function StepCard({
  step,
  isActive,
  onEnter,
  onLeave,
  onFocus,
  onBlur,
  onTap,
}) {
  const [g1, g2, g3] = step.gradient;
  const { mock } = step;

  return (
    <article
      className={`step${isActive ? " step--active" : ""}`}
      tabIndex={0}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onTap}
      style={{ "--g1": g1, "--g2": g2, "--g3": g3 }}
    >
      <div className="step-title">{step.title}</div>

      <div className="step-desc-wrap">
        <p className="step-desc">{step.shortDesc}</p>
        <p className="step-desc-long">{step.longDesc}</p>
      </div>

      <div className="step-checklist">
        {step.checklist.map((item, i) => (
          <div className="check-item" key={i}>
            <span
              className="check-icon"
              style={{ background: item.color, color: "#0f172a" }}
            >
              <Icon name={item.icon} size={13} />
            </span>
            {item.text}
          </div>
        ))}
      </div>

      <div className="step-scene">
        {mock.type === "search" ? (
          <div className="mock-search">
            <div className="mock-search-heading">
              {mock.heading}
              <span className="mock-heading-spark">
                <CallieIcon size={14} />
              </span>
            </div>
            <div className="mock-suggested-label">{mock.suggestedLabel}</div>
            <div className="mock-suggestions">
              {mock.suggestions.map((text, i) => (
                <div className="mock-suggestion" key={i}>
                  {text}
                </div>
              ))}
            </div>
            <div className="mock-search-bar">
              <span className="mock-search-icon">
                <SearchSparkIcon size={15} />
              </span>
              <span className="mock-search-placeholder">
                {mock.placeholder}
              </span>
              <span className="mock-send-icon">
                <SendIcon size={14} />
              </span>
            </div>
          </div>
        ) : mock.type === "video" ? (
          <div className="mock-video">
            {mock.participants.map((p, i) => (
              <div className="mock-video-tile" key={i}>
                <span className="mock-video-name">{p.name}</span>
                {p.img ? (
                  <img className="mock-video-photo" src={p.img} alt={p.name} />
                ) : (
                  <div
                    className="mock-video-avatar"
                    style={{ background: p.color }}
                  >
                    {p.initial}
                  </div>
                )}
              </div>
            ))}
            <div className="mock-video-pill">
              <span className="mock-mute-icon">
                <MuteIcon size={14} />
              </span>
              <span className="mock-waveform">▂▅▇▃▆▂▇▄▅▂</span>
            </div>
          </div>
        ) : mock.type === "email" ? (
          <div className="mock-email">
            <div className="mock-email-badges">
              <span className="mock-badge mock-badge--gmail">
                <GmailIcon size={22} />
              </span>
              <span className="mock-badge mock-badge--outlook">
                <OutlookIcon size={22} />
              </span>
            </div>

            <div className="mock-email-row">
              <span className="mock-email-label">To:</span>
              <span className="mock-email-chip">
                <span className="mock-email-chip-avatar">{mock.toInitial}</span>
                {mock.to}
                <span className="mock-chip-x">×</span>
              </span>
            </div>

            <div className="mock-email-row">
              <span className="mock-email-label">CC:</span>
              <span className="mock-email-chip mock-email-chip--cc">
                <span
                  className="mock-email-chip-icon"
                  style={{ background: mock.ccColor, color: "#0f172a" }}
                >
                  <Icon name={mock.ccIcon} size={12} />
                </span>
                {mock.cc}
                <span className="mock-chip-x">×</span>
              </span>
            </div>

            <div className="mock-email-divider" />

            <div className="mock-email-body">
              {mock.message.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        ) : (
          <div className="mock-card">
            <div className="mock-head">
              <div
                className="mock-avatar"
                style={{
                  background: mock.avatar.color,
                  color: mock.avatar.textColor || "inherit",
                }}
              >
                <Icon name={mock.avatar.icon} size={18} />
              </div>
              <div>
                <div className="mock-name">{mock.name}</div>
                <div className="mock-meta">{mock.meta}</div>
              </div>
            </div>
            <p className="mock-msg">{mock.message}</p>
            <div className="mock-chips">
              {mock.chips.map((chip, i) => (
                <span
                  className={`mock-chip${chip.selected ? " mock-chip--selected" : ""}`}
                  key={i}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
