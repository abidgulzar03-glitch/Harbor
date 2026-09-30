import "./Reports.css";

function BadgeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 19V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 19V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M3 19h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Reports() {
  return (
    <section className="reports">
      <div className="reports__inner">
        {/* Badge */}
        <div className="reports__badge">
          <span className="reports__badge-icon">
            <BadgeIcon />
          </span>
          <span className="reports__badge-label">Reports</span>
          <span className="reports__badge-new">New</span>
        </div>

        {/* Headline */}
        <h1 className="reports__title">
          A clearer way
          <br />
          to see your numbers
        </h1>

        {/* Subtitle */}
        <p className="reports__subtitle">
          Built-in reports that surface what matters — aging, cash flow,
          <br />
          and the work that still needs doing.
        </p>

        {/* CTA */}
        <a href="#" className="reports__cta">
          Start for free
        </a>
      </div>
    </section>
  );
}

export default Reports;
