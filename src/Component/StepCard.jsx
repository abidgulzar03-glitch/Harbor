import "./StepCard.css";

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
            <span className="check-icon" style={{ background: item.color }}>
              {item.icon}
            </span>
            {item.text}
          </div>
        ))}
      </div>

      <svg
        className="step-mark"
        viewBox="0 0 400 160"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M0,120 C55,60 95,140 150,80 C210,20 250,130 320,60 C350,35 380,80 400,50 L400,160 L0,160 Z"
          fill="#0f1f33"
          opacity="0.06"
        />
      </svg>

      <div className="step-scene">
        {step.mock.type === "search" ? (
          <div className="mock-search">
            <div className="mock-search-heading">
              {step.mock.heading}
              <span className="mock-heading-spark">✦</span>
            </div>
            <div className="mock-suggested-label">
              {step.mock.suggestedLabel}
            </div>
            <div className="mock-suggestions">
              {step.mock.suggestions.map((text, i) => (
                <div className="mock-suggestion" key={i}>
                  {text}
                </div>
              ))}
            </div>
            <div className="mock-search-bar">
              <span className="mock-search-icon">⌕</span>
              <span className="mock-search-placeholder">
                {step.mock.placeholder}
              </span>
              <span className="mock-send-icon">➤</span>
            </div>
          </div>
        ) : step.mock.type === "video" ? (
          <div className="mock-video">
            {step.mock.participants.map((p, i) => (
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
              <span className="mock-mute-icon">🔇</span>
              <span className="mock-waveform">▂▅▇▃▆▂▇▄▅▂</span>
            </div>
          </div>
        ) : step.mock.type === "email" ? (
          <div className="mock-email">
            <div className="mock-email-badges">
              <span className="mock-badge mock-badge--gmail">
                <span className="mock-badge-glyph">M</span>
              </span>
              <span className="mock-badge mock-badge--outlook">
                <span className="mock-badge-glyph">O</span>
              </span>
            </div>

            <div className="mock-email-row">
              <span className="mock-email-label">To:</span>
              <span className="mock-email-chip">
                <span className="mock-email-chip-avatar">
                  {step.mock.toInitial}
                </span>
                {step.mock.to}
                <span className="mock-chip-x">×</span>
              </span>
            </div>

            <div className="mock-email-row">
              <span className="mock-email-label">CC:</span>
              <span className="mock-email-chip mock-email-chip--cc">
                <span
                  className="mock-email-chip-icon"
                  style={{ background: step.mock.ccColor }}
                >
                  {step.mock.ccIcon}
                </span>
                {step.mock.cc}
                <span className="mock-chip-x">×</span>
              </span>
            </div>

            <div className="mock-email-divider" />

            <div className="mock-email-body">
              {step.mock.message.split("\n\n").map((para, i) => (
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
                  background: step.mock.avatar.color,
                  color: step.mock.avatar.textColor || "inherit",
                }}
              >
                {step.mock.avatar.icon}
              </div>
              <div>
                <div className="mock-name">{step.mock.name}</div>
                <div className="mock-meta">{step.mock.meta}</div>
              </div>
            </div>
            <p className="mock-msg">{step.mock.message}</p>
            <div className="mock-chips">
              {step.mock.chips.map((chip, i) => (
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
