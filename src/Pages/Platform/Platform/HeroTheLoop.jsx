import "./HeroTheLoop.css";
import { CheckIcon } from "./IconsTheLoop";

const stats = [
  { value: "8", title: "Steps, in order", sub: "Arrival notice to cash" },
  {
    value: "2",
    title: "Hard blocks",
    sub: "Carrier compliance · customer credit",
  },
  { value: "30", title: "Modules", sub: "Five sidebar sections" },
  {
    value: "1",
    title: "Times you type the box number",
    sub: "And never again",
  },
];

export default function HeroTheLoop() {
  return (
    <section className="loop-hero">
      <div className="loop-hero-badge">
        <span className="loop-hero-badge-icon">
          <CheckIcon />
        </span>
        <span>The platform</span>
      </div>

      <h1 className="loop-hero-title">
        The closed
        <br />
        loop, end to end
      </h1>

      <p className="loop-hero-subtitle">
        A load is entered once. Everything after it is the
        <br />
        system's job.
      </p>

      <div className="loop-hero-actions">
        <a href="#demo" className="loop-hero-btn-solid">
          Book a demo
        </a>
        <a href="#why" className="loop-hero-link">
          Why we built it <span className="arrow">→</span>
        </a>
      </div>

      <div className="loop-hero-divider" />

      <div className="loop-hero-stats">
        {stats.map((stat) => (
          <div className="loop-hero-stat" key={stat.title}>
            <div className="loop-hero-stat-value">{stat.value}</div>
            <div className="loop-hero-stat-title">{stat.title}</div>
            <div className="loop-hero-stat-sub">{stat.sub}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
