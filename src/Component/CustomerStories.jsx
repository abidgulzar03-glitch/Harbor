import { useState, useEffect, useRef, useCallback } from "react";
import "./CustomerStories.css";

const STORIES = [
  {
    stat: "Server-side only.",
    quote:
      "No credential reaches the client bundle. Every outbound call is written to the audit log, and simulated data is always labelled simulated.",
    name: "Audited",
    title: "Nothing is switched on by default.",
    logoText: "Audited",
    image: "/story-1.svg",
    thumb: "/story-1.svg",
  },
  {
    stat: "FMCSA QCMobile",
    quote: "Reads authority, insurance and safety rating by docket number.",
    name: "Carrier data",
    title: "Not live yet",
    logoText: "FM",
    image: "/story-2.svg",
    thumb: "/story-2.svg",
  },
  {
    stat: "DAT",
    quote: "Posts a load and returns the lane’s rate history.",
    name: "Load boards",
    title: "Not live yet",
    logoText: "DAT",
    image: "/story-3.svg",
    thumb: "/story-3.svg",
  },
  {
    stat: "Samsara",
    quote: "Pulls tractor positions against the load’s stops.",
    name: "Tracking",
    title: "Not live yet",
    logoText: "SA",
    image: "/story-4.svg",
    thumb: "/story-4.svg",
  },
  {
    stat: "Project44",
    quote: "Watches vessel and container milestones for the free-day clock.",
    name: "Ocean tracking",
    title: "Not live yet",
    logoText: "P44",
    image: "/story-5.svg",
    thumb: "/story-5.svg",
  },
  {
    stat: "Also in the directory",
    quote:
      "Truckstop, Loadmatch, Ferry booking, SAFER, Highway, RMIS, Motive, Geotab, Google Maps, PC Miler, DocuSign, Twilio SMS, QuickBooks, Stripe.",
    name: "The whole directory →",
    title: "Not live yet",
    logoText: "Directory",
    /* swap for your crane photo, e.g. "/crane.jpg" */
    image: "/story-6.svg",
    thumb: "/story-6.svg",
  },
];

const SLIDE_DURATION = 5500; // ms per card, matches source timing

export default function CustomerStories() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const timerRef = useRef(null);
  const remainingRef = useRef(SLIDE_DURATION); // time left on current card
  const startedRef = useRef(0);
  const lastIndexRef = useRef(0);
  const count = STORIES.length;

  const goTo = useCallback((next) => {
    setIndex(next);
    setProgressKey((k) => k + 1);
  }, []);

  useEffect(() => {
    // new card -> full time again
    if (lastIndexRef.current !== index) {
      lastIndexRef.current = index;
      remainingRef.current = SLIDE_DURATION;
    }
    if (paused) return undefined;
    startedRef.current = Date.now();
    timerRef.current = setTimeout(() => {
      goTo((index + 1) % count);
    }, remainingRef.current);
    return () => {
      clearTimeout(timerRef.current);
      // remember what is left so hover-pause resumes in step with the bar
      remainingRef.current = Math.max(
        0,
        remainingRef.current - (Date.now() - startedRef.current),
      );
    };
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
        <span className="cs-eyebrow">Phase ten</span>
        <h2 className="cs-heading">Nothing is switched on by default.</h2>
        <p className="cs-note">
          <span className="cs-note-pill">Not live yet</span>
          This is the directory, not a claim that a connection exists today.
        </p>
      </div>

      <div className="cs-stage">
        {/* Far side peek cards */}
        <button
          type="button"
          className="cs-peek cs-peek-far cs-peek-left"
          style={{ backgroundImage: `url(${STORIES[peekIndex(-2)].thumb})` }}
          onClick={() => goTo(peekIndex(-2))}
          aria-label={`Show ${STORIES[peekIndex(-2)].stat}`}
        />
        <button
          type="button"
          className="cs-peek cs-peek-near cs-peek-left"
          style={{ backgroundImage: `url(${STORIES[peekIndex(-1)].thumb})` }}
          onClick={() => goTo(peekIndex(-1))}
          aria-label={`Show ${STORIES[peekIndex(-1)].stat}`}
        />

        {/* Main card */}
        <div className="cs-card">
          {/* key={index} forces a remount on every card change so the
              right-to-left slide-in animation replays each time. */}
          <div className="cs-card-face" key={index}>
            <div className="cs-card-left">
              <h3 className="cs-stat">{current.stat}</h3>
              <blockquote className="cs-quote">{current.quote}</blockquote>
              <div className="cs-attribution">
                <p className="cs-name">{current.name}</p>
                <p className="cs-title">{current.title}</p>
              </div>
            </div>
            <div className="cs-card-right">
              <img
                className="cs-photo"
                src={current.image}
                alt={current.stat}
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
          aria-label={`Show ${STORIES[peekIndex(1)].stat}`}
        />
        <button
          type="button"
          className="cs-peek cs-peek-far cs-peek-right"
          style={{ backgroundImage: `url(${STORIES[peekIndex(2)].thumb})` }}
          onClick={() => goTo(peekIndex(2))}
          aria-label={`Show ${STORIES[peekIndex(2)].stat}`}
        />
      </div>

      <div className="cs-pagination">
        {STORIES.map((s, i) =>
          i === index ? (
            <span className="cs-track" key={s.stat}>
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
              key={s.stat}
              type="button"
              className="cs-dot"
              onClick={() => handleDotClick(i)}
              aria-label={`Go to ${s.stat}`}
            />
          ),
        )}
      </div>
    </section>
  );
}
