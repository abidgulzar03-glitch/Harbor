import { useEffect, useRef, useState } from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: "pod",
    number: "01",
    boldLead: "POD uploaded",
    text: " lands in the queue the moment a carrier submits it — attached to the record it concerns, with who sent it and when.",
  },
  {
    id: "tracking",
    number: "02",
    boldLead: "Tracking update",
    text: " arrives as a submission, not a live edit, so a status change never overwrites production data on its own.",
  },
  {
    id: "document",
    number: "03",
    boldLead: "Document request",
    text: " from a customer waits in the same place as everything else, ready for staff to apply or reject with a note.",
  },
  {
    id: "appointment",
    number: "04",
    boldLead: "Appointment acknowledged",
    text: " sits as a pending decision until a person confirms the new pickup or delivery time is correct.",
  },
  {
    id: "contact",
    number: "05",
    boldLead: "Contact details changed",
    text: " is queued and audited too — even something as small as an updated phone number goes through a human first.",
  },
];

function StepVisual({ id }) {
  if (id === "pod") {
    return (
      <div className="howItWorks-mock howItWorks-queueCard">
        <div className="howItWorks-queueTop">
          <span className="howItWorks-queueTime">07:52</span>
          <span className="howItWorks-queueBadge">Awaiting decision</span>
        </div>
        <p className="howItWorks-queueTitle">POD uploaded</p>
        <p className="howItWorks-queueSub">Carrier side</p>
        <p className="howItWorks-queueMeta">AR-0420 · 2 pages</p>
      </div>
    );
  }

  if (id === "tracking") {
    return (
      <div className="howItWorks-mock howItWorks-queueCard">
        <div className="howItWorks-queueTop">
          <span className="howItWorks-queueTime">08:14</span>
          <span className="howItWorks-queueBadge">Awaiting decision</span>
        </div>
        <p className="howItWorks-queueTitle">Tracking update</p>
        <p className="howItWorks-queueSub">Carrier side</p>
        <p className="howItWorks-queueMeta">AR-0422 · At delivery</p>
      </div>
    );
  }

  if (id === "document") {
    return (
      <div className="howItWorks-mock howItWorks-queueCard">
        <div className="howItWorks-queueTop">
          <span className="howItWorks-queueTime">08:31</span>
          <span className="howItWorks-queueBadge">Awaiting decision</span>
        </div>
        <p className="howItWorks-queueTitle">Document request</p>
        <p className="howItWorks-queueSub">Customer side</p>
        <p className="howItWorks-queueMeta">MSMU 461 5308 · invoice copy</p>
      </div>
    );
  }

  if (id === "appointment") {
    return (
      <div className="howItWorks-mock howItWorks-queueCard">
        <div className="howItWorks-queueTop">
          <span className="howItWorks-queueTime">09:03</span>
          <span className="howItWorks-queueBadge">Awaiting decision</span>
        </div>
        <p className="howItWorks-queueTitle">Appointment acknowledged</p>
        <p className="howItWorks-queueSub">Carrier side</p>
        <p className="howItWorks-queueMeta">AR-0431 · 12-Sep 06:00</p>
      </div>
    );
  }

  return (
    <div className="howItWorks-mock howItWorks-queueCard">
      <div className="howItWorks-queueTop">
        <span className="howItWorks-queueTime">09:20</span>
        <span className="howItWorks-queueBadge">Awaiting decision</span>
      </div>
      <p className="howItWorks-queueTitle">Contact details changed</p>
      <p className="howItWorks-queueSub">Carrier side</p>
      <p className="howItWorks-queueMeta">MC 884120 · phone</p>
    </div>
  );
}

const CARD_W = 300;
const GAP = 24;
const STEP = CARD_W + GAP;

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;

      // progress: 0 while the section's top is still below the viewport
      // top, 1 once we've scrolled all the way through the pinned section.
      const progress =
        scrollable <= 0 ? 0 : Math.min(Math.max(-rect.top / scrollable, 0), 1);

      const maxShift = STEP * (steps.length - 1);
      const centerOffset = (window.innerWidth - CARD_W) / 2;

      setTranslateX(centerOffset - progress * maxShift);
      setActiveIndex(Math.round(progress * (steps.length - 1)));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="howItWorks-section"
      style={{ height: `${steps.length * 100}vh` }}
    >
      <div className="howItWorks-sticky">
        <p className="howItWorks-eyebrow">The approval queue</p>
        <h2 className="howItWorks-headline">
          Nothing goes live until your staff apply it.
        </h2>

        <div className="howItWorks-viewport">
          <div
            className="howItWorks-track"
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {steps.map((step, idx) => (
              <div
                id={`how-it-works-step-${step.number}`}
                key={step.id}
                className={`howItWorks-item ${
                  idx === activeIndex ? "is-active" : "is-dim"
                }`}
              >
                <div className="howItWorks-card">
                  <StepVisual id={step.id} />
                </div>

                <p className="howItWorks-caption">
                  <strong>
                    {step.number} — {step.boldLead}
                  </strong>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
