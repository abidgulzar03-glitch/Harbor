import "./PortalControl.css";

const customerOn = [
  { icon: "📦", label: "View shipments" },
  { icon: "🔍", label: "Search" },
  { icon: "💸", label: "Wire & remit-to" },
  { icon: "💳", label: "Payment status" },
  { icon: "📄", label: "Statement of account" },
  { icon: "📁", label: "Documents" },
];

const customerOff = [{ icon: "📋", label: "Rate confirmations" }];

const carrierOn = [
  { icon: "🚚", label: "Assigned loads" },
  { icon: "🔍", label: "Search" },
  { icon: "📍", label: "Tracking updates" },
  { icon: "📤", label: "POD upload" },
  { icon: "💳", label: "Payment status" },
  { icon: "📄", label: "Statement of account" },
  { icon: "✅", label: "Rate & load confirmations" },
  { icon: "📅", label: "Appointments" },
];

const carrierOff = [{ icon: "🧾", label: "Invoice submission" }];

const features = [
  {
    title: "Full server-side control",
    description:
      "Turning any feature off removes the capability completely on the server, so bookmarked routes and hidden pages return nothing.",
  },
  {
    title: "Independent Customer & Carrier portals",
    description:
      "Control both experiences separately. Every role only sees the tools, documents, and workflows they should access.",
  },
  {
    title: "Instant capability changes",
    description:
      "Enable or disable modules without redeploying your application. Configuration changes apply immediately with zero downtime.",
  },
];

export default function PortalControl() {
  return (
    <section className="pc-section" id="portal-control">
      <div className="pc-container">
        <aside className="pc-left">
          <div className="pc-mockup">
            <div className="pc-panel">
              <div className="pc-head">
                <span>Customer</span>
                <span className="pc-badge green">ON</span>
              </div>

              {customerOn.map((item) => (
                <div key={item.label} className="pc-pill">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}

              <div className="pc-divider" />

              <span className="pc-badge red">OFF</span>

              {customerOff.map((item) => (
                <div key={item.label} className="pc-pill disabled">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>

            <div className="pc-panel">
              <div className="pc-head">
                <span>Carrier</span>
                <span className="pc-badge green">ON</span>
              </div>

              {carrierOn.map((item) => (
                <div key={item.label} className="pc-pill">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}

              <div className="pc-divider" />

              <span className="pc-badge red">OFF</span>

              {carrierOff.map((item) => (
                <div key={item.label} className="pc-pill disabled">
                  <span>{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </aside>

        <div className="pc-right">
          <div className="pc-sticky">
            <span className="pc-label">PORTAL CONTROL</span>

            <h2>
              Every switch, per side,in
              <br />
              your hands
            </h2>
          </div>

          <div className="pc-cards">
            {features.map((item, index) => (
              <article key={index} className="pc-card">
                <div className="pc-number">0{index + 1}</div>

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
