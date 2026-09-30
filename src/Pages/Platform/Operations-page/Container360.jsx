import "./Container360.css";

const features = [
  {
    title: "Load and parties",
    text: "Customer, carrier, agent, booking, equipment, every stop in order.",
  },
  {
    title: "Milestones",
    text: "Where it is now, when it hit each of the eight, LFD and empty return.",
  },
  {
    title: "Charges",
    text: "Every charge with the party it bills to and the invoice it landed on.",
  },
  {
    title: "Advances",
    text: "SSL and customs money fronted, and the reference it was proven with.",
  },
  {
    title: "Documents",
    text: "Rate con, delivery order, POD, arrival notice, invoice.",
  },
  {
    title: "The feed",
    text: "Every note, event, charge and document, in the order it happened.",
  },
];

export default function Container360() {
  return (
    <section className="c360">
      <div className="c360__container">
        <div className="c360__left">
          <div className="c360__board">
            <div className="c360__head">
              <span>Container 360</span>
              <p>MSMU 461 5308</p>
            </div>

            <div className="c360__rows">
              <div className="c360__row">
                <span>Load</span>
                <strong>AR-0431</strong>
              </div>
              <div className="c360__row">
                <span>Customer</span>
                <strong>GULF COAST IMPORTS</strong>
              </div>
              <div className="c360__row">
                <span>Carrier</span>
                <strong>ATLAS DRAYAGE · MC 884120</strong>
              </div>
            </div>

            <div className="c360__line"></div>

            <div className="c360__rows">
              <div className="c360__row">
                <span>Status</span>
                <strong className="blue">IN TRANSIT</strong>
              </div>
              <div className="c360__row">
                <span>Last free day</span>
                <label className="pill yellow">12-SEP-26 · 1 DAY</label>
              </div>
              <div className="c360__row">
                <span>Empty return</span>
                <label className="pill amber">OUTSTANDING</label>
              </div>
            </div>

            <div className="c360__line"></div>

            <div className="c360__rows">
              <div className="c360__row">
                <span>Charges</span>
                <strong>4 · $ 1,663.40</strong>
              </div>
              <div className="c360__row">
                <span>Advance (SSL)</span>
                <label className="pill green">RECEIVED 08-SEP</label>
              </div>
            </div>

            <div className="c360__docs">
              <h4>9 DOCUMENTS · 27 FEED ENTRIES</h4>
              <p>
                Rate con, delivery order, arrival notice, invoice, POD request.
              </p>
            </div>

            <div className="c360__footer">
              Load · parties · milestones · money · documents · feed
            </div>
          </div>
        </div>

        <div className="c360__right">
          <span className="c360__badge">
            <i>✓</i> Container 360
          </span>

          <h2>Type the box number.</h2>

          <p className="c360__intro">
            The question arriving by phone is almost never “how is load AR-0431
            doing”. It is “where is MSMU 461 5308 and why has it not moved”.
          </p>

          <div className="c360__grid">
            {features.map((item) => (
              <div className="c360__card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <a href="/" className="c360__link">
            The reports behind the board →
          </a>
        </div>
      </div>
    </section>
  );
}
