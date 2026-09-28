import "./Compliance.css";
import ComplianceSection from "./ComplianceSection";
import TheCheck from "./TheCheck";
import CarrierGate from "./CarrierGate";
import AddressSection from "./AddressSection";
import EmailLockSection from "./EmailLockSection";
import TwoClockside from "./TwoClockSide";
import BookDemo from "./BookDemo";
function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Compliance() {
  return (
    <>
      <section className="cp-hero">
        <div className="cp-container">
          <div className="cp-badge">
            <span className="cp-badge-icon">
              <CheckIcon />
            </span>
            <span className="cp-badge-text">Compliance</span>
          </div>

          <h1 className="cp-title">
            Nobody hauls until
            <br />
            they clear
          </h1>

          <p className="cp-subtitle">
            {" "}
            Double brokering is the risk that ends brokerages. Every gate here
            exists for one sequence — this one.
          </p>
        </div>
      </section>

      <ComplianceSection />
      <TheCheck />
      <CarrierGate />
      <AddressSection />
      <EmailLockSection />
      <TwoClockside />
      <BookDemo />
    </>
  );
}
