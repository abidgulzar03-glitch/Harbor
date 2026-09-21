import { useState, useEffect, useRef, useCallback } from "react";
import "./CustomerStories.css";

const STORIES = [
  {
    stat: "75 hours saved monthly",
    quote:
      "Calendly helps us protect our team’s time and make every support interaction count.",
    name: "Marques Stewart",
    title: "Managing Director of Technology at Achievement First",
    logoText: "Achievement First",
    image: "/cterimg-1.jpg",
    thumb: "/cterimg-1.jpg",
  },
  {
    stat: "80% reduction in booking-related emails",

    quote:
      "We care deeply about the experience they have with us — and Calendly helps us start it off right.",

    name: "Akira Bradley",

    title: "Co-Founder at Barking with the Bradley's",

    logoText: "Barking with the Bradley's",

    image: "/cterimg-2.jpg",

    thumb: "/cterimg-2.jpg",
  },
  {
    stat: "3 to 5 hours saved per week",

    quote: "Notetaker organizes the chaos of dialogue into clarity.",

    name: "Lizzie Lewis",

    title: "Founder at Kitty of Angels",

    logoText: "Kitty of Angels",

    image: "/cterimg-3.jpg",

    thumb: "/cterimg-3.jpg",
  },
  {
    stat: "$1,200 annual savings",

    quote:
      "I use Calendly every single day. Without it, I honestly couldn’t run my business.",

    name: "Pua Pakele",

    title: "Founder at RBL Media",

    logoText: "RBL Media",

    image: "/cterimg-4.jpg",

    thumb: "/cterimg-4.jpg",
  },
  {
    stat: "100% attendance rate",

    quote:
      "Adding a booking fee didn’t just reduce no-shows — it changed the tone of my consultations.",

    name: "Elizabeth Saunders",

    title: "Founder at Real Life E",

    logoText: "Real Life E",

    image: "/cterimg-5.jpg",

    thumb: "/cterimg-5.jpg",
  },
];

const SLIDE_DURATION = 5500; // ms per card, matches source timing

export default function CustomerStories() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const timerRef = useRef(null);
  const count = STORIES.length;

  const goTo = useCallback((next) => {
    setIndex(next);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goTo((index + 1) % count);
    }, SLIDE_DURATION);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, goTo, count]);

  const handleDotClick = (i) => {
    if (i === index) return;
    goTo(i);
  };

  const peekIndex = (offset) => (index + offset + count) % count;

  const current = STORIES[index];

  return (
    <section
      className="cs-section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="cs-header">
        <span className="cs-eyebrow">Customer stories</span>
        <h2 className="cs-heading">
          Discover how businesses grow with Calendly
        </h2>
      </div>

      <div className="cs-stage">
        {/* Far side peek cards */}
        <button
          type="button"
          className="cs-peek cs-peek-far cs-peek-left"
          style={{ backgroundImage: `url(${STORIES[peekIndex(-2)].thumb})` }}
          onClick={() => goTo(peekIndex(-2))}
          aria-label={`Show ${STORIES[peekIndex(-2)].name}'s story`}
        />
        <button
          type="button"
          className="cs-peek cs-peek-near cs-peek-left"
          style={{ backgroundImage: `url(${STORIES[peekIndex(-1)].thumb})` }}
          onClick={() => goTo(peekIndex(-1))}
          aria-label={`Show ${STORIES[peekIndex(-1)].name}'s story`}
        />

        {/* Main card */}
        <div className="cs-card">
          {/* key={index} forces a remount on every card change so the
              right-to-left slide-in animation replays each time. */}
          <div className="cs-card-face" key={index}>
            <div className="cs-card-left">
              <h3 className="cs-stat">{current.stat}</h3>
              <blockquote className="cs-quote">“{current.quote}”</blockquote>
              <div className="cs-attribution">
                <p className="cs-name">{current.name}</p>
                <p className="cs-title">{current.title}</p>
              </div>
            </div>
            <div className="cs-card-right">
              <img
                className="cs-photo"
                src={current.image}
                alt={current.name}
              />
              <div className="cs-photo-scrim" />
              <span className="cs-logo">{current.logoText}</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="cs-peek cs-peek-near cs-peek-right"
          style={{ backgroundImage: `url(${STORIES[peekIndex(1)].thumb})` }}
          onClick={() => goTo(peekIndex(1))}
          aria-label={`Show ${STORIES[peekIndex(1)].name}'s story`}
        />
        <button
          type="button"
          className="cs-peek cs-peek-far cs-peek-right"
          style={{ backgroundImage: `url(${STORIES[peekIndex(2)].thumb})` }}
          onClick={() => goTo(peekIndex(2))}
          aria-label={`Show ${STORIES[peekIndex(2)].name}'s story`}
        />
      </div>

      <div className="cs-pagination">
        {STORIES.map((s, i) =>
          i === index ? (
            <span className="cs-track" key={s.name}>
              <span
                className="cs-track-fill"
                key={progressKey}
                style={{
                  animationDuration: `${SLIDE_DURATION}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </span>
          ) : (
            <button
              key={s.name}
              type="button"
              className="cs-dot"
              onClick={() => handleDotClick(i)}
              aria-label={`Go to ${s.name}'s story`}
            />
          ),
        )}
      </div>
    </section>
  );
}
