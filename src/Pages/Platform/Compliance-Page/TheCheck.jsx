import { useEffect, useState } from "react";
import "./TheCheck.css";

const features = [
  {
    no: "01",
    title: "Identity",
    text: "Legal name and DBA against the number you typed. A mismatch is what a re-brokered load looks like first.",
    tag: "Legal name · DBA",
    color: "blue",
    icon: "👤",
  },
  {
    no: "02",
    title: "Authority",
    text: "Active, inactive or revoked. A broker authority answering as a carrier is the whole fraud in one line.",
    tag: "Status · Type · Granted",
    color: "green",
    icon: "🛡️",
  },
  {
    no: "03",
    title: "Contact",
    text: "The federally registered address — the one a fraudulent party cannot quietly change.",
    tag: "FMCSA email",
    color: "purple",
    icon: "✉️",
  },
  {
    no: "04",
    title: "Safety",
    text: "Rating, out-of-service rate, power units and drivers. A fleet of two running four boxes a day is odd.",
    tag: "Rating · OOS · Fleet",
    color: "orange",
    icon: "📊",
  },
  {
    no: "05",
    title: "Insurance",
    text: "Liability and cargo cover, with the expiry as a watched date rather than a number read once.",
    tag: "BIPD · Cargo · Expiry",
    color: "cyan",
    icon: "☂️",
  },
];

const TOTAL = features.length + 1;
const STEP = 304;

// Three copies allow the carousel to loop smoothly.
const baseSlides = [{ type: "lookup" }, ...features];
const slides = [...baseSlides, ...baseSlides, ...baseSlides];

export default function CarrierVerification() {
  const [index, setIndex] = useState(TOTAL);
  const [animate, setAnimate] = useState(true);

  /* =========================================================
     AUTO SLIDE
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  /* =========================================================
     SEAMLESS LOOP RESET
  ========================================================= */

  useEffect(() => {
    if (index === TOTAL * 2) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setIndex(TOTAL);

        requestAnimationFrame(() => {
          setAnimate(true);
        });
      }, 900);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section className="carrier-section">
      {/* =====================================================
          BACKGROUND VIDEO
          This video belongs ONLY to carrier-section
      ====================================================== */}

      <video
        className="carrier-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/Compl-video-1.mp4" type="video/mp4" />
      </video>

      {/* DARK VIDEO OVERLAY */}
      <div className="carrier-overlay" />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="carrier-sticky">
        {/* ===================================================
            HEADER
        ==================================================== */}

        <div className="carrier-header">
          <span className="carrier-label">THE CHECK</span>

          <h2>
            Type an MC number.
            <br />
            Get the federal record.
          </h2>

          <p>
            It runs server-side and fills the carrier record directly from the
            FMCSA registry—not from a retyped copy.
          </p>
        </div>

        {/* ===================================================
            CAROUSEL VIEWPORT
        ==================================================== */}

        <div className="carrier-track-viewport">
          <div
            className="carrier-track"
            style={{
              transform: `translateX(calc(50vw - 140px - ${index * STEP}px))`,

              transition: animate
                ? "transform .9s cubic-bezier(.22,1,.36,1)"
                : "none",
            }}
          >
            {slides.map((item, i) => {
              const isActive = i === index;

              {
                /* =================================================
                  LOOKUP CARD
              ================================================== */
              }

              if (item.type === "lookup") {
                return (
                  <article
                    key={i}
                    className={`lookup-card ${isActive ? "active" : "dim"}`}
                  >
                    <div className="lookup-inner">
                      <div className="lookup-top">
                        <span>Carrier lookup</span>

                        <span>MC 884120</span>
                      </div>

                      <div className="lookup-row">
                        <span>Legal name</span>
                        <strong>ATLAS DRAYAGE LLC</strong>
                      </div>

                      <div className="lookup-row">
                        <span>USDOT</span>
                        <strong>2551907</strong>
                      </div>

                      <div className="lookup-row">
                        <span>Authority</span>
                        <b className="ok">ACTIVE</b>
                      </div>

                      <div className="lookup-row">
                        <span>Safety</span>
                        <b className="ok">SATISFACTORY</b>
                      </div>

                      <div className="lookup-row">
                        <span>Out of service</span>
                        <strong>4.1%</strong>
                      </div>

                      <div className="lookup-row">
                        <span>Power units</span>
                        <strong>34 / 41</strong>
                      </div>

                      <div className="lookup-row">
                        <span>Insurance</span>
                        <strong>$1,000,000</strong>
                      </div>

                      <div className="lookup-row">
                        <span>Cargo expiry</span>
                        <b className="warn">14 NOV 26</b>
                      </div>

                      <div className="verified">✓ VERIFIED · FMCSA MATCH</div>

                      <small>Filled from the federal registry.</small>
                    </div>
                  </article>
                );
              }

              {
                /* =================================================
                  INFORMATION CARD
              ================================================== */
              }

              return (
                <article
                  key={i}
                  className={`info-card ${isActive ? "active" : "dim"}`}
                >
                  <div className={`icon ${item.color}`}>{item.icon}</div>

                  <span className="number">{item.no}</span>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <span className="tag">{item.tag}</span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
