import "./Hero.css";
import ScrollDemo from "./ScrollDemo";

export default function LandingHero() {
  return (
    <section className="landing-hero" id="landing-hero">
      <div className="landing-hero__card">
        <div className="landing-hero__content">
          <span className="landing-hero__badge">
            <span className="landing-hero__check">✓</span>
            Ocean drayage, end to end
          </span>
          <h1 className="landing-hero__title">
            Every container. Every charge.
            <br />
            Every carrier.
          </h1>
          <p className="landing-hero__subtitle">
            From arrival notice to invoice, every load is tracked, every carrier
            <br />
            is verified, and every charge is accounted for — automatically.
          </p>
          <div className="landing-hero__actions">
            <button className="landing-btn landing-btn--primary">
              Book a demo
              <span className="landing-btn__arrow">↗</span>
            </button>

            <button className="landing-btn landing-btn--secondary">
              See how it works
            </button>
          </div>
          <ScrollDemo />
        </div>
      </div>
    </section>
  );
}
