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
        <div className="eyebrow">The closed loop</div>
        <h1>Keyed once. The rest is the system’s job</h1>
        <p className="lede">
          Most brokerages key the same container four times. Every re-key loses
          a charge.
        </p>
        <button className="cta">Book a Demo</button>

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
