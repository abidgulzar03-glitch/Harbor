import { useEffect, useState } from "react";
import "./BookDemo.css";

const steps = [
  {
    number: 1,
    text: "You send one container number and one invoice before the call.",
    ms: 3800,
  },
  {
    number: 2,
    text: "We load them in live — your lane, your customer, your accessorials.",
    ms: 3800,
  },
  {
    number: 3,
    text: "We run the gates against a carrier you choose, and show you what refuses.",
    ms: 4200,
  },
  {
    number: 4,
    text: "You keep the generated paperwork, whether or not you buy.",
    ms: 3800,
  },
];

export default function BookDemo() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [run, setRun] = useState(0); // bumps on every step change to restart the bar

  // live loop: advance to the next step when the current one finishes
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (paused || reduce) return;

    const id = setTimeout(() => {
      setActive((a) => (a + 1) % steps.length);
      setRun((r) => r + 1);
    }, steps[active].ms);

    return () => clearTimeout(id);
  }, [active, paused]);

  const goTo = (i) => {
    setActive(i);
    setRun((r) => r + 1);
  };

  return (
    <section id="demo-section" className="demo">
      <div className="demo__wrap">
        <div className="demo__tag">Book a demo</div>

        <h1 className="demo__heading">See it against your own containers.</h1>

        <p className="demo__text">
          Forty minutes, no slides. Bring one live container and one messy
          invoice.
        </p>

        <div className="demo__actions">
          <a href="#" id="btn-book" className="button button--solid">
            Book a demo
          </a>
          <a href="#" id="btn-pricing" className="button button--ghost">
            See pricing
          </a>
        </div>

        <div className="demo__label">What happens on the call</div>

        <div
          className="demo__grid"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {steps.map((step, i) => {
            const isActive = active === i;
            const isDone = i < active;
            return (
              <div
                key={step.number}
                id={`item-${step.number}`}
                className={
                  "card" +
                  (isActive ? " card--active" : "") +
                  (isDone ? " card--done" : "")
                }
                onClick={() => goTo(i)}
              >
                <div className="card__num">{isDone ? "✓" : step.number}</div>
                <p>{step.text}</p>
                <div className="card__track">
                  {isActive && (
                    <div
                      className={
                        "card__bar" + (paused ? " card__bar--paused" : "")
                      }
                      key={`${run}-${i}`}
                      style={{ animationDuration: `${step.ms}ms` }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
