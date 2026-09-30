import "./HowItWorksTheLoop.css";
import WorkflowSectionTheLoop from "./WorkflowSectionTheLoop";

export default function HowItWorksTheLoop() {
  return (
    <section className="how-it-works-section">
      <p className="how-it-works-label">The sequence</p>
      <h2 className="how-it-works-heading">
        Eight steps.
        <br />
        Two of them refuse.
      </h2>
      <WorkflowSectionTheLoop />
    </section>
  );
}