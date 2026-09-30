import "./TheShipmentsBoard.css";

const columns = [
  {
    cards: [
      {
        id: "TCLU 772 9140",
        ref: "AR-0433",
        company: "Gulf Coast Imports",
        status: "ETA 14-Sep",
        type: "blue",
      },
      {
        id: "MSDU 318 4472",
        ref: "AR-0434",
        company: "Gulf Coast Imports",
        status: "SSL hold",
        type: "red",
      },
    ],
  },
  {
    cards: [
      {
        id: "MSMU 461 5308",
        ref: "AR-0431",
        company: "Atlas Drayage",
        status: "LFD in 1 day",
        type: "yellow",
      },
      {
        id: "CAIU 640 1188",
        ref: "AR-0428",
        company: "Unassigned",
        status: "Carrier needed",
        type: "yellow",
      },
    ],
  },
  {
    cards: [
      {
        id: "HLXU 219 7734",
        ref: "AR-0420",
        company: "Portside Haulage",
        status: "Past ETA",
        type: "yellow",
      },
      {
        id: "TGHU 550 9012",
        ref: "AR-0422",
        company: "Atlas Drayage",
        status: "On time",
        type: "green",
      },
    ],
  },
  {
    cards: [
      {
        id: "MRKU 883 4120",
        ref: "AR-0411",
        company: "Bayport Terminal",
        status: "Per diem 3 days",
        type: "red",
      },
      {
        id: "FCIU 771 2205",
        ref: "AR-0414",
        company: "Bayport Terminal",
        status: "Due 15-Sep",
        type: "blue",
      },
    ],
  },
];

export default function TheShipmentsBoard() {
  return (
    <section className="shipments">
      <div className="shipments__container">
        <div className="shipments__head">
          <div className="shipments__badge">
            <span className="badge-dot">✓</span>
            <span>The shipments board</span>
          </div>

          <h2>
            Columns are the phase
            <br />
            the box is in.
          </h2>

          <p>
            Every container lives in one operational phase. Open the record,
            filter the list, and move the shipment as work progresses.
          </p>
        </div>

        <div className="shipments__board">
          {columns.map((column, index) => (
            <div className="shipments__column" key={index}>
              {column.cards.map((card) => (
                <div className="shipment-card" key={card.id}>
                  <div>
                    <h3>{card.id}</h3>
                    <p className="ref">{card.ref}</p>
                    <p className="company">{card.company}</p>
                  </div>

                  <div className={`status ${card.type}`}>
                    <span className="status-dot"></span>
                    {card.status}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
