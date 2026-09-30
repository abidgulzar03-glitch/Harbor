import "./Boundaries.css";

const ARROW_ICON = (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PAW_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6.2" cy="8.4" r="1.9" />
    <circle cx="11.2" cy="6" r="1.9" />
    <circle cx="16.2" cy="8.4" r="1.9" />
    <path d="M11.2 10.4c-3.6 0-6 2.7-6 5.4 0 1.7 1.3 2.6 2.9 2.6 1.2 0 1.8-.6 3.1-.6s1.9.6 3.1.6c1.6 0 2.9-.9 2.9-2.6 0-2.7-2.4-5.4-6-5.4z" />
  </svg>
);

const KOALA_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="6.5" r="2.5" />
    <circle cx="12" cy="13" r="6" />
    <circle cx="9.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="14.5" cy="13" r="0.6" fill="currentColor" stroke="none" />
    <path d="M11 15.5c.4.4 1.6.4 2 0" strokeLinecap="round" />
  </svg>
);

const BALL_ICON = (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.3"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 8.2l3 2.2-1.1 3.6H10.1L9 10.4l3-2.2z" />
    <path d="M12 3.5v4.7M12 15.8v4.7M4.5 8l4.5 2.4M15 13.6l4.5 2.4M19.5 8L15 10.4M9 13.6l-4.5 2.4" />
  </svg>
);

const STORIES = [
  {
    org: "A separate sign-in surface",
    sub: "",
    logo: PAW_ICON,
    kind: "quote",
    quote:
      "Portal users are not staff with fewer menu items. They are their own accounts, tied to one customer or one carrier.",
  },
  {
    org: "Their records only",
    sub: "",
    logo: KOALA_ICON,
    kind: "quote",
    quote:
      "Scope is applied where the query runs, so a guessed URL returns nothing rather than somebody else\u2019s container.",
  },
  {
    org: "Proposals, never mutations",
    sub: "",
    logo: BALL_ICON,
    kind: "quote",
    quote:
      "There is no path from a portal into a production record that does not pass a member of your staff.",
  },
  {
    org: "One brokerage\u2019s data, always",
    sub: "",
    logo: PAW_ICON,
    kind: "quote",
    quote:
      "Every record carries its organisation, enforced by the database as well as the application.",
  },
];

export default function Boundaries() {
  return (
    <section className="bd-section">
      <div className="bd-inner">
        <p className="bd-eyebrow">Boundaries</p>
        <h2 className="bd-heading">
          Two portals,
          <br />
          one set of records.
        </h2>

        <div className="bd-cards">
          {STORIES.map((s, i) => (
            <div className={`bd-card bd-card-${i}`} key={s.org}>
              <div className="bd-card-logo">
                <span className="bd-logo-mark">{s.logo}</span>
                <span className="bd-logo-text">
                  <span className="bd-logo-name">{s.org}</span>
                  <span className="bd-logo-sub">{s.sub}</span>
                </span>
              </div>

              <div className="bd-card-body">
                {s.kind === "quote" ? (
                  <p className="bd-quote">&ldquo;{s.quote}&rdquo;</p>
                ) : (
                  <div className="bd-stat-block">
                    <p className="bd-stat-label">{s.label}</p>
                    <p className="bd-stat-value">{s.stat}</p>
                  </div>
                )}
              </div>

              <a className="bd-card-link" href="#case-study">
                Read case study
                <span className="bd-card-link-icon">{ARROW_ICON}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
