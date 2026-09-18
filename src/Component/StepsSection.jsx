import { useState, useEffect, useRef } from "react";
import StepCard from "./StepCard";
import STEPS from "./StepsData";
import "../Component/StepsSection.css";
export default function StepsSection() {
  const [activeId, setActiveId] = useState(null);
  const canHoverRef = useRef(true);

  useEffect(() => {
    canHoverRef.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  const handleEnter = (id) => canHoverRef.current && setActiveId(id);
  const handleLeave = (id) =>
    canHoverRef.current && setActiveId((cur) => (cur === id ? null : cur));
  const handleTap = (id) => {
    if (canHoverRef.current) return; // desktop uses hover, not click
    setActiveId((cur) => (cur === id ? null : id));
  };

  return (
    <section className="hero-2">
      <div className="hero-card-2">
        <div className="eyebrow">AI meeting management</div>
        <h1>Built for people whose work runs on meetings</h1>
        <p className="lede">
          Meetings move you forward, but the work around them can slow you down.
          This handles the tasks before, during, and after — so you have more
          space for what matters.
        </p>
        <button className="cta">Start for free</button>

        <div className="steps">
          {STEPS.map((step) => (
            <StepCard
              key={step.id}
              step={step}
              isActive={activeId === step.id}
              onEnter={() => handleEnter(step.id)}
              onLeave={() => handleLeave(step.id)}
              onFocus={() => handleEnter(step.id)}
              onBlur={() => handleLeave(step.id)}
              onTap={() => handleTap(step.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
