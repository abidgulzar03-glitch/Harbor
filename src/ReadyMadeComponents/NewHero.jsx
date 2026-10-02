import "./NewHero.css";
import { useEffect, useState } from "react";

/* =========================================================
   HERO CARDS DATA
========================================================= */

const cards = [
  /* =======================================================
     LEFT CARD
  ======================================================= */

  {
    type: "free-days",

    container: "MSMU 461 5308",

    category: "Demurrage",

    status: "Last free day passed",

    progress: ["active", "active", "active", "danger"],

    details: [
      {
        label: "Free days used",
        value: "5 of 5",
      },
      {
        label: "Last free day",
        value: "Sep 18",
      },
    ],

    footerLabel: "Free days used",
    footerValue: "$275.00 / day",
  },

  /* =======================================================
     CENTER CARD
  ======================================================= */

  {
    type: "charge",

    badge: "Advance short",

    amount: "$1,240.00",

    title: "Short of the wire on file",

    description: "Only the owner can release it.",

    details: [
      {
        label: "Invoice",
        value: "INV-10482",
      },
      {
        label: "Amount due",
        value: "$1,240.00",
      },
      {
        label: "Payment status",
        value: "Pending",
      },
    ],

    footerLabel: "Release required",
    footerValue: "Owner approval",
  },

  /* =======================================================
     RIGHT CARD
  ======================================================= */

  {
    type: "carrier",

    company: "Bay State Cartage",

    mc: "MC 738214",

    category: "Carrier",

    status: "Held",

    details: [
      {
        label: "Authority",
        value: "Active",
      },
      {
        label: "Insurance",
        value: "Expired",
      },
    ],

    footerLabel: "Carrier status",
    footerValue: "Needs attention",
  },
];

/* =========================================================
   NEW HERO
========================================================= */

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

        {/* =================================================
            CARDS
        ================================================= */}

        <div
          className={`new-hero__cards ${
            active ? "new-hero__cards--visible" : ""
          }`}
        >
          {cards.map((card, index) => (
            <div
              key={card.type}
              className={`
                new-hero__card
                new-hero__card--${index + 1}
                new-hero__card--${card.type}
              `}
            >
              {/* =========================================
                  LEFT CARD — FREE DAYS
              ========================================= */}

              {card.type === "free-days" && (
                <>
                  {/* Card Header */}

                  <div className="hero-card__top">
                    <div className="hero-card__container">{card.container}</div>

                    <div className="hero-card__category">{card.category}</div>
                  </div>

                  {/* Status */}

                  <div className="hero-card__status hero-card__status--danger">
                    <span className="hero-card__status-dot" />

                    {card.status}
                  </div>

                  {/* Progress */}

                  <div className="hero-card__progress">
                    {card.progress.map((item, progressIndex) => (
                      <span
                        key={progressIndex}
                        className={`
                          hero-card__progress-item
                          hero-card__progress-item--${item}
                        `}
                      />
                    ))}
                  </div>

                  {/* Reduced Details */}

                  <div className="hero-card__details">
                    {card.details.map((detail) => (
                      <div className="hero-card__detail" key={detail.label}>
                        <span>{detail.label}</span>

                        <strong>{detail.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}

                  <div className="hero-card__bottom">
                    <span>{card.footerLabel}</span>

                    <strong>{card.footerValue}</strong>
                  </div>
                </>
              )}

              {/* =========================================
                  CENTER CARD — CHARGE
              ========================================= */}

              {card.type === "charge" && (
                <>
                  {/* Badge */}

                  <div className="hero-card__badge">
                    <span className="hero-card__badge-dot" />

                    {card.badge}
                  </div>

                  {/* Amount */}

                  <div className="hero-card__amount">{card.amount}</div>

                  {/* Title */}

                  <div className="hero-card__title">{card.title}</div>

                  {/* Description */}

                  <div className="hero-card__description">
                    {card.description}
                  </div>

                  {/* Details */}

                  <div className="hero-card__details hero-card__details--dark">
                    {card.details.map((detail) => (
                      <div className="hero-card__detail" key={detail.label}>
                        <span>{detail.label}</span>

                        <strong>{detail.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}

                  <div className="hero-card__bottom hero-card__bottom--dark">
                    <span>{card.footerLabel}</span>

                    <strong>{card.footerValue}</strong>
                  </div>
                </>
              )}

              {/* =========================================
                  RIGHT CARD — CARRIER
              ========================================= */}

              {card.type === "carrier" && (
                <>
                  {/* Card Header */}

                  <div className="hero-card__top">
                    <div>
                      <div className="hero-card__company">{card.company}</div>

                      <div className="hero-card__mc">{card.mc}</div>
                    </div>

                    <div className="hero-card__category">{card.category}</div>
                  </div>

                  {/* Status */}

                  <div className="hero-card__status hero-card__status--danger">
                    <span className="hero-card__status-dot" />

                    {card.status}
                  </div>

                  {/* Reduced Details */}

                  <div className="hero-card__details">
                    {card.details.map((detail) => (
                      <div className="hero-card__detail" key={detail.label}>
                        <span>{detail.label}</span>

                        <strong>{detail.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Footer */}

                  <div className="hero-card__bottom">
                    <span>{card.footerLabel}</span>

                    <strong>{card.footerValue}</strong>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewHero;
