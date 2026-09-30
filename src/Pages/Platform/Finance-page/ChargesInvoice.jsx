import "./ChargesInvoice.css";

const features = [
  {
    icon: "✧",
    title: "Charge types",
    text: "Line haul, Fuel surcharge, Chassis, Storage, Drayage, Transloading, Dunnage, Top chain, OTR charges, Warehouse, Detention, Per diem, Other",
    active: true,
  },
  {
    icon: "☷",
    title: "Bill to",
    text: "Customer, Carrier, Warehouse, Sales agent, Other",
    active: false,
  },
  {
    icon: "▱",
    title: "3 invoices · 0 charges left behind",
    text: "Nothing on the load is optional to copy.",
    active: false,
  },
];

const invoiceRows = [
  ["Line haul", "$1,240.00", "Customer"],
  ["Fuel surcharge", "$138.40", "Customer"],
  ["Chassis, 2 days", "$90.00", "Customer"],
  ["Dunnage", "$65.00", "Warehouse"],
  ["Top chain", "$45.00", "Sales agent"],
];

function ChargesInvoice() {
  return (
    <section className="charges-invoice">
      <div className="charges-invoice__container">
        {/* LEFT CONTENT */}
        <div className="charges-invoice__content">
          <div className="charges-invoice__eyebrow">CHARGES → INVOICE</div>

          <h2>There is only one list.</h2>

          <div className="charges-invoice__subtitle">
            <p>
              A charge carries the party it bills to, and the invoice builder
              reads the charges directly. An accessorial that exists is billed,
              or it is not a charge.
            </p>
          </div>

          <div className="charges-invoice__divider" />

          <div className="charges-invoice__features">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`charges-invoice__feature ${
                  feature.active ? "charges-invoice__feature--active" : ""
                }`}
              >
                <div className="charges-invoice__feature-title">
                  <span className="charges-invoice__icon">{feature.icon}</span>
                  <span>{feature.title}</span>
                </div>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="charges-invoice__visual">
          <div className="charges-invoice__blob">
            <div className="invoice-main-card">
              {/* Header */}
              <div className="invoice-main-card__header">
                <div className="invoice-main-card__titles">
                  <span>Charge</span>
                  <span>Amount</span>
                  <span>Bill to</span>
                </div>

                <div className="invoice-main-card__filter">
                  <span>Filter</span>
                  <span className="invoice-main-card__chevron">⌄</span>
                </div>
              </div>

              {/* Rows */}
              <div className="invoice-main-card__rows">
                {invoiceRows.map((row) => (
                  <div className="invoice-main-card__row" key={row[0]}>
                    <span className="invoice-main-card__name">{row[0]}</span>
                    <span className="invoice-main-card__amount">{row[1]}</span>
                    <span className="invoice-main-card__party">{row[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChargesInvoice;
