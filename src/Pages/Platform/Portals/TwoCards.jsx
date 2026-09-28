import "./TwoCards.css";

const TwoCards = () => {
  const customerContainers = [
    {
      id: "MSMU 461 5308",
      route: "AR-0431 · Houston → San Antonio · ETA 13-SEP",
      status: "IN TRANSIT",
      statusType: "solid",
    },
    {
      id: "TCLU 772 9140",
      route: "AR-0433 · LFD 14-SEP · chassis assigned",
      status: "AT PICKUP",
      statusType: "gray",
    },
    {
      id: "MSDU 318 4472",
      route: "AR-0434 · advance outstanding · not released",
      status: "SSL HOLD",
      statusType: "outline",
    },
  ];

  const carrierLoads = [
    {
      id: "AR-0431",
      details: "MSMU 461 5308 · pickup 12-SEP 06:00 · acknowledged",
      status: "ASSIGNED",
      statusType: "solid",
    },
    {
      id: "AR-0422",
      details: "TGHU 550 9012 · POD upload available",
      status: "AT DELIVERY",
      statusType: "gray",
    },
  ];

  const StatusBadge = ({ text, type }) => (
    <span
      className={
        type === "solid"
          ? "badge-solid"
          : type === "outline"
            ? "badge-outline"
            : "badge-gray"
      }
    >
      {text}
    </span>
  );

  return (
    <section className="two-cards-container">
      {/* Customer Card */}
      <div className="portal-card">
        <div>
          <div className="portal-header">
            <span className="portal-title">Customer Portal</span>
            <span className="portal-subtitle">GULF COAST IMPORTS</span>
          </div>

          {customerContainers.map((item) => (
            <div className="portal-item" key={item.id}>
              <div>
                <h4 className="item-id">{item.id}</h4>
                <p className="item-subtext">{item.route}</p>
              </div>

              <StatusBadge text={item.status} type={item.statusType} />
            </div>
          ))}

          <div className="financial-box">
            <div>
              <p className="metric-label">Open Balance</p>
              <h3 className="metric-value">$26,741.25</h3>
            </div>

            <div>
              <p className="metric-label">60+ Days</p>
              <h3 className="metric-value">$2,105.75</h3>
            </div>
          </div>

          <div className="action-dashed-box">
            <p className="action-title">STATEMENT · ANY DATE RANGE</p>
            <p className="action-desc">
              Downloads on your letterhead with MC docket and bank details.
            </p>
          </div>
        </div>
      </div>

      {/* Carrier Card */}
      <div className="portal-card">
        <div>
          <div className="portal-header">
            <span className="portal-title">Carrier Portal</span>
            <span className="portal-subtitle">ATLAS DRAYAGE · MC 884120</span>
          </div>

          {carrierLoads.map((item) => (
            <div className="portal-item" key={item.id}>
              <div>
                <h4 className="item-id">{item.id}</h4>
                <p className="item-subtext">{item.details}</p>
              </div>

              <StatusBadge text={item.status} type={item.statusType} />
            </div>
          ))}

          <div className="status-summary-box">
            <div className="status-row">
              <span className="status-label">Rate confirmation</span>
              <span className="status-value">RC-0417 · SIGNED</span>
            </div>

            <div className="status-row">
              <span className="status-label">Payment status</span>
              <span className="status-value">REMIT TO FACTOR</span>
            </div>

            <p className="action-desc">
              SEABOARD FUNDING LLC · net 30 · due 09-OCT-26
            </p>
          </div>
        </div>

        <div>
          <button className="btn-primary">UPLOAD POD · SUBMIT INVOICE</button>

          <p className="btn-footer-text">
            Both arrive as submissions. Neither changes a record on its own.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TwoCards;
