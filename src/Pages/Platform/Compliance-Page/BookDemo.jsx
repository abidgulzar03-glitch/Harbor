import "./BookDemo.css";

const steps = [
  {
    number: 1,
    text: "You send one container number and one invoice before the call.",
  },
  {
    number: 2,
    text: "We load them in live — your lane, your customer, your accessorials.",
  },
  {
    number: 3,
    text: "We run the gates against a carrier you choose, and show you what refuses.",
  },
  {
    number: 4,
    text: "You keep the generated paperwork, whether or not you buy.",
  },
];

export default function BookDemo() {
  return (
    <section id="demo-section" className="demo">
      <div className="demo__wrap">
        <div className="demo__tag">Book a demo</div>

        <h1 className="demo__heading">See it against your own containers.</h1>

        <p className="demo__text">
          Forty minutes, no slides. Bring one live container and one messy
          invoice.
        </p>

        <div className="demo__actions">
          <a href="#" id="btn-book" className="button button--solid">
            Book a demo
          </a>
          <a href="#" id="btn-pricing" className="button button--ghost">
            See pricing
          </a>
        </div>

        <div className="demo__label">What happens on the call</div>

        <div className="demo__grid">
          {steps.map((step) => (
            <div key={step.number} id={`item-${step.number}`} className="card">
              <div className="card__num">{step.number}</div>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
