import "./CTASection.css";
import "./AutoImageSlider";
import "./AutoImageSlider";
import AutoImageSlider from "./AutoImageSlider";
export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <span className="cta-badge">GET STARTED</span>

        <h2 className="cta-title">
          From the first meeting to
          <br />
          the follow-up
        </h2>

        <p className="cta-text">
          All of the work around meetings, handled in one place. Book time,
          capture every discussion, and keep next steps moving without the
          manual work.
        </p>

        <button className="cta-button">Start for free</button>
      </div>
      <AutoImageSlider />
    </section>
  );
}
