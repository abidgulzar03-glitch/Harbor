import "./NewHero.css";
import { useEffect, useState } from "react";

function NewHero() {
  const [active, setActive] = useState(false);

  /* =======================================================
     HERO ENTRANCE ANIMATION
  ======================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="new-hero">
      <div className="new-hero__container">
        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div
          className={`new-hero__content ${
            active ? "new-hero__content--visible" : ""
          }`}
        >
          <div className="new-hero__eyebrow">Ocean drayage, end to end</div>

          <h1 className="new-hero__title">
            Every container. Every charge.
            <br />
            <strong>Every carrier.</strong>
          </h1>

          <p className="new-hero__description">
            From arrival notice to invoice, every load is tracked, every carrier
            is verified, and every charge is accounted for — automatically.
          </p>
        </div>

        {/* =================================================
            BUTTONS
        ================================================= */}

        <div
          className={`new-hero__actions ${
            active ? "new-hero__actions--visible" : ""
          }`}
        >
          <div className="new-hero__buttons">
            <a href="#" className="new-hero__btn new-hero__btn--primary">
              Book a demo
              <span className="new-hero__btn-arrow">↗</span>
            </a>

            <a href="#" className="new-hero__btn new-hero__btn--secondary">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewHero;
