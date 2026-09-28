import "./ComplianceSection.css";

function ShieldCheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

const complianceSteps = [
  {
    number: "01",
    text: "A carrier answers your posting. The MC is real, the paperwork ordinary, the rate a little better than everyone else's.",
  },
  {
    number: "02",
    text: "It never meant to run the load. It re-brokers it cheaper — under your rate confirmation, on your load number.",
  },
  {
    number: "03",
    text: "A real trucking company hauls the box and invoices the party that tendered it. Nobody answers the phone.",
  },
  {
    number: "04",
    text: "He comes to you, because your name is on the paperwork. He holds the freight, or files a lien, or a cargo claim.",
  },
  {
    number: "05",
    text: "You pay twice, or you eat the cargo. Neither is covered by the margin on that load.",
  },
  {
    number: "06",
    text: "Your customer hears it from the trucker outside their dock. That is the part you do not get back.",
  },
];

function ComplianceSection() {
  return (
    <section className="compliance-section">
      <div className="compliance-decor-circle compliance-decor-circle-top" />
      <div className="compliance-decor-circle compliance-decor-circle-bottom" />

      <div className="compliance-container">
        {/* LEFT — sticky */}

        <h3 className="compliance-subtitle"></h3>

        <span className="compliance-decor-plus"></span>
      </div>

      {/* RIGHT — scrolls past the sticky left column */}
      <div className="compliance-right">
        <div className="compliance-grid">
          {complianceSteps.map((step) => (
            <div className="compliance-card" key={step.number}>
              <div className="compliance-card-number">{step.number}</div>
              <p className="compliance-card-text">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="compliance-note">
          <span className="compliance-note-icon">
            <ShieldCheckIcon />
          </span>
          <span className="compliance-note-divider" />
          <p className="compliance-note-text">
            Every brokerage has a policy that would have stopped this. Almost
            none enforce it at six on a Friday, when the box has to move and the
            only carrier answering is cheap and unknown.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComplianceSection;
