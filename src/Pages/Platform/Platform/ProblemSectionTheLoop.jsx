import "./ProblemSectionTheLoop.css";

const features = [
  {
    title: "The load board",
    description:
      "Container, lane, weight, dates. Every load starts here, entered by hand from an email, a call, or a customer portal.",
    risk: "One wrong digit in the container number and everything downstream inherits it.",
    subFeatures: ["Container", "Lane", "Weight", "Dates"],
  },
  {
    title: "The spreadsheet",
    description:
      "The same box, with the rate beside it. Dispatch or pricing copies the container over and adds the agreed rate in a separate file.",
    risk: "Rates get updated in one place and forgotten in another.",
    subFeatures: ["Box number", "Rate"],
  },
  {
    title: "The invoice",
    description:
      "Typed from the sheet, or from memory. Accounting rebuilds the load details again to bill the customer.",
    risk: "Accessorials, detention and last-minute changes often never make it onto the bill.",
    subFeatures: ["From sheet", "From memory"],
  },
  {
    title: "The statement",
    description:
      "Assembled at month end from all three. Someone reconciles the board, the sheet and the invoices line by line.",
    risk: "Mismatches surface weeks later, when customers are already asking questions.",
    subFeatures: ["Load", "Rate", "Invoice"],
  },
];

export default function ProblemSectionTheLoop() {
  return (
    <section className="scheduling-section">
      <div className="scheduling-container">
        {/* LEFT CONTENT */}
        <div className="scheduling-left">
          <div className="scheduling-sticky">
            <p className="scheduling-label">The problem</p>

            <h2 className="scheduling-heading">
              Most brokerages key the same
              <br />
              container four times
            </h2>

            <p className="scheduling-intro">
              Every load passes through four different tools, and each one asks
              your team to type the same details again. It is slow, it is
              error-prone, and it is the reason month end takes days instead of
              minutes.
            </p>
          </div>

          <div className="scheduling-features">
            {features.map((feature, i) => (
              <div className="scheduling-feature" key={i}>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>

                  <p className="feature-desc">{feature.description}</p>

                  {feature.risk && (
                    <p className="feature-risk">{feature.risk}</p>
                  )}

                  {feature.subFeatures && feature.subFeatures.length > 0 && (
                    <div className="feature-subfeatures">
                      {feature.subFeatures.map((item, index) => (
                        <div className="sub-feature" key={index}>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <p className="scheduling-summary">
            Four entries means four chances for a typo, a missed rate, or a load
            that never gets billed. The Loop captures it once and carries it
            through every step.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="scheduling-right">
          <div className="calendar-card">
            <img
              src="/Theloop-img-1.jpg"
              alt="The Loop platform"
              className="scheduling-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
