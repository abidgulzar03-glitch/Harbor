import "./ProblemSectionTheLoop.css";

const features = [
  {
    title: "The load board",
    description: "Container, lane, weight, dates.",
    subFeatures: ["Container", "Lane", "Weight", "Dates"],
  },
  {
    title: "The spreadsheet",
    description: "The same box, with the rate beside it.",
    subFeatures: ["Box number", "Rate"],
  },
  {
    title: "The invoice",
    description: "Typed from the sheet, or from memory.",
    subFeatures: ["From sheet", "From memory"],
  },
  {
    title: "The statement",
    description: "Assembled at month end from all three.",
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
          </div>

          <div className="scheduling-features">
            {features.map((feature, i) => (
              <div className="scheduling-feature" key={i}>
                <div className="feature-content">
                  <h3 className="feature-title">{feature.title}</h3>

                  <p className="feature-desc">{feature.description}</p>

                  {feature.subFeatures && feature.subFeatures.length > 0 && (
                    <div className="feature-subfeatures">
                      {feature.subFeatures.map((item, index) => (
                        <div className="sub-feature" key={index}>
                          <span className="sub-feature-dot"></span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
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
