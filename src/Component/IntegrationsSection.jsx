import "./IntegrationsSection.css";

const CARDS = [
  {
    id: 1,
    title: "The desk",
    description: "Books the freight and answers for it moving.",
    tags: ["Sales Manager", "Transportation Manager", "Dispatch", "Tracking"],
  },
  {
    id: 2,
    title: "The money",
    description: "Bills it, chases it, and releases an advance.",
    tags: ["Finance Manager", "Accounts"],
  },
  {
    id: 3,
    title: "The office",
    description: "Sets the rules, approves carriers, reads everything.",
    tags: [
      "Owner",
      "General Manager",
      "Compliance Manager",
      "Compliance Team",
      "Viewer",
    ],
  },
  {
    id: 4,
    title: "Outside it",
    description:
      "Sees their own file only. Everything they send is a proposal your staff accept.",
    tags: ["Customer portal", "Carrier portal"],
  },
];

function IntegrationCard({ card }) {
  return (
    <article className="integration-card">
      <div className="integration-card-header">
        <div className="integration-card-info">
          <div className="integration-card-title-row">
            <h3>{card.title}</h3>
          </div>

          <p className="integration-card-description">{card.description}</p>
        </div>
      </div>

      <div className="integration-card-tags">
        {card.tags.map((tag) => (
          <span className="integration-card-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function IntegrationsSection() {
  return (
    <section className="integrations-section">
      <div className="integrations-container">
        <div className="integrations-eyebrow">
          <span className="integrations-eyebrow-icon">✓</span>

          <span>Roles and permissions</span>
        </div>

        <h2 className="integrations-title">Four kinds of trust.</h2>

        <p className="integrations-subtitle">
          Give every person the right access to the right information.
        </p>

        <div className="integrations-marquee">
          <div className="integrations-marquee-track">
            {/* FIRST SET */}
            <div className="integrations-marquee-group">
              {CARDS.map((card) => (
                <IntegrationCard key={`first-${card.id}`} card={card} />
              ))}
            </div>

            {/* SECOND SET FOR SEAMLESS INFINITE LOOP */}
            <div className="integrations-marquee-group" aria-hidden="true">
              {CARDS.map((card) => (
                <IntegrationCard key={`second-${card.id}`} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
