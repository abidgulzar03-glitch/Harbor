import "./DemoExperience.css";

/* ========================================
   ICONS
======================================== */

const svgProps = {
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
};

const strokeProps = {
  stroke: "currentColor",
  strokeWidth: "1.6",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function CheckIcon() {
  return (
    <svg {...svgProps}>
      <path d="M4 8.2l2.6 2.6L12 5.4" {...strokeProps} />
    </svg>
  );
}

function AlertIcon() {
  return (
    <svg {...svgProps}>
      <path d="M8 2.5l6 10.5H2L8 2.5z" {...strokeProps} />
      <path d="M8 6.5v3M8 11.2v.1" {...strokeProps} />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg {...svgProps}>
      <path d="M8 2.5v7M5 7l3 3 3-3M3 13h10" {...strokeProps} />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg {...svgProps}>
      <rect x="3.5" y="7" width="9" height="6.5" rx="1.5" {...strokeProps} />
      <path d="M5.5 7V5.2a2.5 2.5 0 015 0V7" {...strokeProps} />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg {...svgProps}>
      <rect x="2.5" y="3.5" width="11" height="10" rx="1.5" {...strokeProps} />
      <path d="M2.5 6.5h11M5.5 2v3M10.5 2v3" {...strokeProps} />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg {...svgProps}>
      <path d="M2.5 5L8 2.5 13.5 5v6L8 13.5 2.5 11V5z" {...strokeProps} />
      <path d="M2.5 5L8 7.5 13.5 5M8 7.5v6" {...strokeProps} />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg {...svgProps}>
      <path d="M8 2l5 2v4c0 3-2.2 5-5 6-2.8-1-5-3-5-6V4l5-2z" {...strokeProps} />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg {...svgProps}>
      <path d="M4 2.5h5l3 3v8H4v-11z" {...strokeProps} />
      <path d="M9 2.5v3h3" {...strokeProps} />
    </svg>
  );
}

/* ========================================
   DEMO STEPS DATA
======================================== */

const demoSteps = [
  {
    key: "pre-call",
    accent: "blue",
    icon: <CalendarIcon />,
    label: "Before the call",
    card: {
      title: "Your prep",
      fields: [
        { label: "Container", value: "One live box" },
        { label: "Invoice", value: "One messy one" },
        { label: "Attendees", value: "Ops + billing" },
      ],
      cta: "Send us the details",
    },
    caption: "Send the container number and invoice ahead, or bring them along.",
  },
  {
    key: "live-load",
    accent: "purple",
    icon: <BoxIcon />,
    label: "Live load",
    card: {
      title: "MSMU 461 5308",
      badge: "LIVE",
      rows: [
        { label: "Load", value: "AR-0431", check: true },
        { label: "Customer", value: "Gulf Coast Imports", check: true },
        { label: "Last free day", value: "12-Sep-26", check: false },
      ],
      progress: 62,
      progressLabel: "Milestones",
    },
    caption: "We type your box number and walk through where it is and why.",
  },
  {
    key: "gate-checks",
    accent: "teal",
    icon: <ShieldIcon />,
    label: "Gate checks",
    card: {
      title: "Before it bills",
      checks: [
        { name: "Charge has a billing party", result: "Passed" },
        { name: "Advance proven with reference", result: "Passed" },
        { name: "Invoice matches rate con", result: "Failed" },
      ],
      warning: "One charge is blocked until the rate con is attached.",
    },
    caption: "Your messy invoice gets checked before anything reaches the customer.",
  },
  {
    key: "files",
    accent: "orange",
    icon: <FileIcon />,
    label: "What you keep",
    card: {
      title: "Demo output",
      files: ["Container-360-summary.pdf", "Invoice-check-report.pdf"],
      footer: "Your data stays in your account",
    },
    caption: "You leave with the reports from your own containers.",
  },
];

/* ========================================
   COMPONENT
======================================== */

export default function DemoExperience() {
  return (
    <section className="demo-experience-section">
      <p className="demo-exp-label">THE DEMO EXPERIENCE</p>

      <h2 className="demo-exp-heading">
        See it against your
        <br />
        own containers.
      </h2>

      <p className="demo-exp-subtitle">
        Forty minutes. No slides. Bring one live container and one messy
        invoice.
      </p>

      <div className="demo-exp-grid">
        {demoSteps.map((step) => (
          <div className="demo-exp-col" key={step.key}>
            {/* Icon + Title */}
            <div className="demo-exp-header">
              <div className={`demo-exp-icon demo-exp-icon-${step.accent}`}>
                {step.icon}
              </div>
              <h3 className="demo-exp-col-label">{step.label}</h3>
            </div>

            {/* Card */}
            <div className={`demo-exp-card demo-exp-card-${step.accent}`}>
              <div className="demo-exp-card-header">
                <span className="demo-exp-card-title">{step.card.title}</span>

                {step.card.badge && (
                  <span className="demo-exp-badge-live">
                    {step.card.badge}
                  </span>
                )}
              </div>

              {/* Pre-call */}
              {step.card.fields && (
                <div className="demo-exp-fields">
                  {step.card.fields.map((field) => (
                    <div className="demo-exp-field" key={field.label}>
                      <span className="demo-exp-field-label">
                        {field.label}
                      </span>
                      <span className="demo-exp-field-value">
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {step.card.cta && (
                <button className="demo-exp-cta-btn" type="button">
                  {step.card.cta} <span>→</span>
                </button>
              )}

              {/* Live Load */}
              {step.card.rows && (
                <div className="demo-exp-rows">
                  {step.card.rows.map((row) => (
                    <div className="demo-exp-row" key={row.label}>
                      <div className="demo-exp-row-text">
                        <span className="demo-exp-row-label">
                          {row.label}
                        </span>
                        <span className="demo-exp-row-value">
                          {row.value}
                        </span>
                      </div>

                      {row.check && (
                        <span className="demo-exp-check">
                          <CheckIcon />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Progress */}
              {step.card.progress !== undefined && (
                <div className="demo-exp-progress-wrap">
                  <span className="demo-exp-progress-label">
                    {step.card.progressLabel}
                  </span>

                  <div className="demo-exp-progress-bar">
                    <div
                      className="demo-exp-progress-fill"
                      style={{ width: `${step.card.progress}%` }}
                    />
                  </div>

                  <span className="demo-exp-progress-pct">
                    {step.card.progress}%
                  </span>
                </div>
              )}

              {/* Gate Checks */}
              {step.card.checks && (
                <div className="demo-exp-checks">
                  <div className="demo-exp-checks-header">
                    <span>Check</span>
                    <span>Result</span>
                  </div>

                  {step.card.checks.map((check) => (
                    <div className="demo-exp-checks-row" key={check.name}>
                      <span>{check.name}</span>

                      <span
                        className={`demo-exp-result ${
                          check.result === "Passed"
                            ? "demo-exp-result-pass"
                            : "demo-exp-result-fail"
                        }`}
                      >
                        {check.result}
                      </span>
                    </div>
                  ))}

                  {step.card.warning && (
                    <div className="demo-exp-warning">
                      <AlertIcon />
                      <span>{step.card.warning}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Files */}
              {step.card.files && (
                <div className="demo-exp-files">
                  {step.card.files.map((file) => (
                    <div className="demo-exp-file" key={file}>
                      <span className="demo-exp-file-icon">PDF</span>
                      <span className="demo-exp-file-name">{file}</span>
                      <DownloadIcon />
                    </div>
                  ))}
                </div>
              )}

              {step.card.footer && (
                <div className="demo-exp-footer-pill">
                  <LockIcon />
                  <span>{step.card.footer}</span>
                </div>
              )}
            </div>

            <p className="demo-exp-caption">{step.caption}</p>
          </div>
        ))}
      </div>

      <div className="demo-exp-actions">
        <a href="#demo" className="demo-exp-btn-solid">
          Book a demo
        </a>

        <a href="#pricing" className="demo-exp-link">
          See pricing <span>→</span>
        </a>
      </div>
    </section>
  );
}