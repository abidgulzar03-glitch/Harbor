import "./DemoExperienceTheLoop.css";
import {
  CheckIcon,
  AlertIcon,
  LockIcon,
  DownloadIcon,
  DocIcon,
  CalendarPlayIcon,
  ShieldCheckIcon,
  FolderIcon,
} from "./IconsTheLoop";

const demoSteps = [
  {
    key: "pre-call",
    icon: <DocIcon />,
    accent: "blue",
    label: "Pre-call",
    caption: "You send one container number and one invoice before the call.",
    card: {
      title: "Send details before the call",
      fields: [
        { label: "Container number", value: "CONT-78421" },
        { label: "Invoice", value: "INV-009876" },
      ],
      cta: "Send to OceanGate",
    },
  },
  {
    key: "live-load",
    icon: <CalendarPlayIcon />,
    accent: "purple",
    label: "Live load",
    caption:
      "We load them in live — your lane, your customer, your accessorials.",
    card: {
      title: "Live load in progress",
      badge: "Live",
      rows: [
        { label: "Lane", value: "IAH → DAL", check: false },
        { label: "Customer", value: "Acme Brands", check: true },
        {
          label: "Accessorials",
          value: "Chassis / Genset / Triaxle",
          check: true,
        },
      ],
      progressLabel: "Loading your real data...",
      progress: 68,
    },
  },
  {
    key: "run-gates",
    icon: <ShieldCheckIcon />,
    accent: "teal",
    label: "Run the gates",
    caption:
      "We run the gates against a carrier you choose, and show you what refuses.",
    card: {
      title: "Carrier check: Horizon Logistics",
      checks: [
        { name: "Carrier Profile", result: "Passed" },
        { name: "Insurance", result: "Passed" },
        { name: "Safety Score", result: "Refused" },
        { name: "Service Lane", result: "Passed" },
        { name: "Equipment", result: "Refused" },
      ],
      warning: "2 checks refused",
    },
  },
  {
    key: "paperwork",
    icon: <FolderIcon />,
    accent: "orange",
    label: "Keep the paperwork",
    caption: "You keep the generated paperwork, whether or not you buy.",
    card: {
      title: "Generated paperwork",
      files: [
        "Container Inspection Report.pdf",
        "Load Confirmation.pdf",
        "Invoice & Accessorials.pdf",
      ],
      footer: "Yours to keep.",
    },
  },
];

export default function DemoExperienceTheLoop() {
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
            <div className="demo-exp-header">
              <div className={`demo-exp-icon demo-exp-icon-${step.accent}`}>
                {step.icon}
              </div>
              <h3 className="demo-exp-col-label">{step.label}</h3>
            </div>

            <div className={`demo-exp-card demo-exp-card-${step.accent}`}>
              <div className="demo-exp-card-header">
                <span className="demo-exp-card-title">{step.card.title}</span>
                {step.card.badge && (
                  <span className="demo-exp-badge-live">{step.card.badge}</span>
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

              {/* Live load */}
              {step.card.rows && (
                <div className="demo-exp-rows">
                  {step.card.rows.map((row) => (
                    <div className="demo-exp-row" key={row.label}>
                      <div className="demo-exp-row-text">
                        <span className="demo-exp-row-label">{row.label}</span>
                        <span className="demo-exp-row-value">{row.value}</span>
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

              {/* Gate checks */}
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
