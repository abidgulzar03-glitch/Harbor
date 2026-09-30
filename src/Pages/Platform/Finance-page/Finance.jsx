import "./Finance.css";
import Chargesinvoice from "./ChargesInvoice";
// import BothSides from "./BothSides.";
function CardIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="5 12.5 10 17.5 19 7.5" />
    </svg>
  );
}

const financeStats = [
  {
    number: "13",
    title: "Charge types",
    text: "Against five bill-to parties",
  },
  {
    number: "4",
    title: "Aging buckets",
    text: "One implementation, everywhere",
  },
  {
    number: "1",
    title: "List of charges",
    text: "The invoice reads it directly",
  },
  {
    number: "0",
    title: "Floating-point amounts",
    text: "Integer cents throughout",
  },
];

export default function Finance() {
  return (
    <section className="finance">
      {/* ================= HERO ================= */}
      <div className="finance__hero">
        <div className="finance__badge">
          <span className="finance__icon">
            <CardIcon />
          </span>

          <span className="finance__label">Finance</span>
        </div>

        <h1 className="finance__title">Charges become invoices</h1>

        <p className="finance__text">
          A drayage brokerage rarely loses its margin on a bad rate. It loses it
          to a chassis charge nobody billed, four days of demurrage somebody
          absorbed, and an invoice that quietly turned ninety days old.
        </p>

        <button className="finance__btn">Book a demo</button>
      </div>

      {/* ================= STATS ================= */}
      <div className="finance__stats-wrapper">
        <div className="finance__stats">
          {financeStats.map((stat, index) => (
            <div className="finance__stat" key={index}>
              <div className="finance__stat-number">{stat.number}</div>

              <div className="finance__stat-title">{stat.title}</div>

              <div className="finance__stat-text">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>

      <Chargesinvoice />
      {/* <BothSides /> */}
    </section>
  );
}
