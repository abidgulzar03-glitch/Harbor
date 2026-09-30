import "./TheStepper.css";

const steps = [
  {
    no: "01",
    title: "Inbound",
    status: "Booked — Awaiting Confirmation",
    chip: "Stamps ETA",
  },
  {
    no: "02",
    title: "Available",
    status: "Needs Driver",
    chip: "Stamps Last free day",
  },
  {
    no: "03",
    title: "Picked",
    status: "At Pickup",
    chip: "Stamps Pickup date",
  },
  { no: "04", title: "Warehouse", status: "In Transit", chip: "" },
  { no: "05", title: "Out", status: "In Transit", chip: "" },
  {
    no: "06",
    title: "Delivery",
    status: "Delivered",
    chip: "Stamps Delivery date",
  },
  {
    no: "07",
    title: "Empty returned",
    status: "Awaiting Paperwork",
    chip: "Stamps Empty return",
  },
  { no: "08", title: "Closed", status: "Ready for Billing", chip: "" },
];

export default function TheStepper() {
  return (
    <section className="stepper">
      <div className="stepper__container">
        <div className="stepper__hero">
          <span className="stepper__badge">
            <span className="stepper__dot">✓</span>
            The stepper
          </span>

          <h2>
            One click each.
            <br />
            Six consequences each.
          </h2>
        </div>

        <div className="stepper__content">
          <div className="stepper__grid">
            {steps.map((item) => (
              <div className="stepCard" key={item.no}>
                <span className="stepCard__number">{item.no}</span>
                <h3>{item.title}</h3>
                <p className="stepCard__label">Sets status to</p>
                <h4>{item.status}</h4>
                {item.chip && (
                  <span className="stepCard__chip">{item.chip}</span>
                )}
              </div>
            ))}
          </div>

          <div className="stepper__info">
            <strong>Delivery does more than the rest.</strong> In one
            transaction it stamps both invoice dates, marks the load ready to
            bill, requests the POD, prepares the customer invoice and the
            carrier bill, and notifies the agent.
          </div>
        </div>
      </div>
    </section>
  );
}
