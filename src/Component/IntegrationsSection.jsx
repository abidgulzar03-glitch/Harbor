import { useEffect, useState } from "react";
import "./IntegrationsSection.css";

// Images live in /public.
// For the "head pops out of the card" look, each image should be a PERSON
// CUTOUT with a transparent background (PNG or WebP).
// Order follows your video: Payment Received -> Discovery Scheduled ->
// Meeting Summarized -> Interview Booked, then it loops.
const SLIDES = [
  {
    id: "payment",
    src: "/Auto-img-3.jpg",
    alt: "Man smiling with a laptop",
    icon: "card",
    tint: "#5eead4",
    words: ["Payment", "Received"],
  },
  {
    id: "discovery",
    src: "/Auto-img-4.jpg",
    alt: "Woman holding a tablet",
    icon: "callie",
    tint: "#d9f99d",
    words: ["Discovery", "Scheduled"],
  },
  {
    id: "meeting",
    src: "/Auto-img-1.jpeg",
    alt: "Smiling woman in a cream jacket",
    icon: "notetaker",
    tint: "#c4b5fd",
    words: ["Meeting", "Summarized"],
  },
  {
    id: "interview",
    src: "/Auto-img-2.jpg",
    alt: "Woman holding a laptop",
    icon: "hourglass",
    tint: "#5aa2ff",
    words: ["Interview", "Booked"],
  },
];

const INTERVAL = 4500;

// Doubled so slides can leave on the left and re-enter off-screen on the right.
const ITEMS = [...SLIDES, ...SLIDES];
const N = ITEMS.length;
const HALF = Math.floor(N / 2);

const svg = {
  viewBox: "0 0 24 24",
  width: 20,
  height: 20,
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const ICONS = {
  card: (
    <svg {...svg}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 10h18M7 15h3" />
    </svg>
  ),
  callie: (
    <svg {...svg}>
      <path d="M12 2.5c.9 5.6 3.9 8.6 9.5 9.5-5.6.9-8.6 3.9-9.5 9.5-.9-5.6-3.9-8.6-9.5-9.5 5.6-.9 8.6-3.9 9.5-9.5Z" />
    </svg>
  ),
  notetaker: (
    <svg {...svg}>
      <path d="M5 19c0-9 5-14 14-14 0 9-5 14-14 14Z" />
      <path d="M5 19 13 11" />
    </svg>
  ),
  hourglass: (
    <svg {...svg}>
      <path d="M6 3h12M6 21h12M7 3c0 5 5 6 5 9s-5 4-5 9M17 3c0 5-5 6-5 9s5 4 5 9" />
    </svg>
  ),
};

export default function IntegrationsSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => setActive((a) => (a + 1) % N);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduce) return undefined;
    const t = setInterval(next, INTERVAL);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="integrations-section">
      <div className="integrations-container">
        <div className="integrations-eyebrow">Get started</div>

        <h2 className="integrations-title">
          From the first meeting to the follow-up
        </h2>

        <p className="integrations-subtitle">
          All of the work around meetings, handled in one place. Book time,
          capture every discussion, and keep next steps moving without the
          manual work.
        </p>

        <button type="button" className="integrations-cta">
          Start for free
        </button>
      </div>

      <div
        className="hero-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="How meetings flow"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {ITEMS.map((slide, i) => {
          const d = ((i - active + HALF + N) % N) - HALF;
          const cls = [
            "hero-slide",
            `hero-slide--${slide.id}`,
            d === 0 && "is-active",
            Math.abs(d) === 2 && "is-far",
            Math.abs(d) >= 3 && "is-parked",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <figure
              key={`${slide.id}-${i}`}
              className={cls}
              style={{ "--d": d, "--tint": slide.tint }}
              aria-hidden={d !== 0}
              onClick={d === 1 ? next : undefined}
            >
              {/* BACK: the colored card */}
              <div className="hero-card">
                <span className="hero-blob hero-blob--a" />
                <span className="hero-blob hero-blob--b" />
              </div>

              {/* FRONT: the person, taller than the card so the head sticks out */}
              <img className="hero-slide-img" src={slide.src} alt={slide.alt} />

              <div className="hero-pills" aria-hidden="true">
                <span className="hero-pill-icon">{ICONS[slide.icon]}</span>
                <span className="hero-pill">{slide.words[0]}</span>
                <span className="hero-pill hero-pill--serif">
                  {slide.words[1]}
                </span>
              </div>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
