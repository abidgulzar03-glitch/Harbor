import "./Portals.css";
import TwoSide from "./TwoSide";
import TwoCards from "./TwoCards";
import HowItWorks from "./HowItWorks";
import PortalControl from "./PortalControl";
export default function Portals() {
  return (
    <>
      <section className="portals-hero">
        <div className="portals-content">
          <div className="portals-badge">
            <span className="portals-badge-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <span className="portals-badge-title">Portals</span>
          </div>

          <h1 className="portals-headline">
            Customers and carriers, self-serve
          </h1>

          <p className="portals-subtext">
            Two portals on their own login, each showing exactly what belongs to
            it—and nothing they submit touches your records until your staff
            apply it.
          </p>

          <div className="portals-ctas">
            <button className="portals-btn">Where is my container?</button>
            <button className="portals-btn">Send me the POD.</button>
            <button className="portals-btn">What do I owe you?</button>
          </div>

          <p className="portals-footnote">
            All three have exact answers already sitting in the load record. All
            three currently cost somebody twenty minutes and a search of their
            sent items.
          </p>
        </div>
      </section>
      /<TwoSide />
      <TwoCards />
      <HowItWorks />
      <PortalControl />
    </>
  );
}
