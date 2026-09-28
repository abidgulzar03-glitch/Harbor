import "./CarrierGate.css";

const REQUIREMENTS = [
  {
    tag: "01 · REQUIRED",
    title: "MC operating authority",
    body: "Matched to the legal name the registry returns, not the PDF the carrier emailed.",
  },
  {
    tag: "02 · REQUIRED",
    title: "USDOT number",
    body: "Checked at lookup and again when the freshness clock runs out. A duplicate surfaces early.",
  },
  {
    tag: "03 · REQUIRED",
    title: "Certificate of insurance",
    body: "Liability and cargo, with the expiry entered as a date, not remembered.",
  },
  {
    tag: "04 · REQUIRED",
    title: "W9",
    body: "On file before the carrier is usable — so, before the first payment.",
  },
];

const LEDGER_ROWS = [
  {
    label: "MC authority",
    status: "ON FILE",
    ok: true,
  },
  {
    label: "USDOT",
    status: "ON FILE",
    ok: true,
  },
  {
    label: "Insurance",
    status: "ON FILE",
    ok: true,
  },
  {
    label: "W9",
    status: "MISSING",
    ok: false,
  },
  {
    label: "Reviewer",
    status: "NOT SIGNED",
    ok: false,
  },
];

export default function CarrierGate() {
  return (
    <div className="cg-root">
      <div className="cg-wrap">
        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="cg-stamp-row">
          <div className="cg-stamp">✓ The Gate</div>
        </div>

        <h1>
          Four documents and
          <br />a person's signature
        </h1>

        <p className="cg-lede">
          All four on file, and a reviewer approving in writing.{" "}
          <b>Not three of the four.</b> Not "we'll get the W9 on Monday."
        </p>

        {/* =====================================================
            REQUIREMENTS
        ====================================================== */}

        <div className="cg-req-strip">
          {REQUIREMENTS.map((req) => (
            <div className="cg-req" key={req.title}>
              <div className="cg-tag">{req.tag}</div>

              <h3>{req.title}</h3>

              <p>{req.body}</p>
            </div>
          ))}
        </div>

        {/* =====================================================
            REQUIREMENT FIVE + CARRIER RECORD
        ====================================================== */}

        <div className="cg-lower">
          {/* REQUIREMENT FIVE */}

          <div className="cg-req-five">
            <div className="cg-tag">05 · REQUIREMENT FIVE</div>

            <h2>A named person approves, and writes why</h2>

            <p>
              The comment, the reviewer, the timestamp and the source live on
              the record, so an auditor can be shown the decision rather than
              told about it.
            </p>

            <p>
              Carriers created in a hurry start pending. No path to approved
              skips a human, so the back door is shut too.
            </p>

            <div className="cg-refuse">
              ✕ Dispatch documents refuse to generate
            </div>
          </div>

          {/* =================================================
              CARRIER RECORD
          ================================================== */}

          <div className="cg-record">
            {/* RECORD HEADER */}

            <div className="cg-record-head">
              <span className="cg-k">CARRIER RECORD</span>

              <span className="cg-v">MC 1194772</span>
            </div>

            {/* CARRIER NAME */}

            <div className="cg-id-line">
              <span className="cg-name">REDLINE TRANSPORT INC</span>
            </div>

            {/* STATUS */}

            <div className="cg-status-badge">PENDING COMPLIANCE</div>

            {/* LEDGER */}

            <div className="cg-ledger">
              {LEDGER_ROWS.map((row) => (
                <div className="cg-row" key={row.label}>
                  <span className="cg-lab">{row.label}</span>

                  <span className={`cg-stat ${row.ok ? "cg-ok" : "cg-miss"}`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>

            {/* NOT USABLE */}

            <div className="cg-not-usable">
              <div className="cg-h">✕ NOT USABLE FOR DISPATCH</div>

              <p>Attempts are refused and recorded with the user who tried.</p>
            </div>

            {/* FOOT LINE */}

            <div className="cg-footline">Two requirements outstanding</div>
          </div>
        </div>
      </div>
    </div>
  );
}
