import "./Compliance.css";
import ComplianceSections from "./ComplianceSections";
import TheCheck from "./TheCheck";

import CarrierGate from "./CarrierGate";
import AddressSection from "./AddressSection";
import EmailLockSection from "./EmailLockSection";
import TwoClockside from "./TwoClockSide";
import BookDemo from "./BookDemo";

export default function Compliance() {
  return (
    <>
      <section className="cp-hero">
        <div className="cp-container">
          <div className="cp-badge">Compliance</div>

          <h1 className="cp-title">
            Nobody hauls until
            <br />
            <strong>they clear</strong>
          </h1>

          <p className="cp-subtitle">
            {" "}
            Double brokering is the risk that ends brokerages. Every gate here
            exists for one sequence — this one.
          </p>
        </div>
      </section>
      <ComplianceSections />

      <TheCheck />
      <CarrierGate />
      <AddressSection />
      <EmailLockSection />
      <TwoClockside />
      <BookDemo />
    </>
  );
}
