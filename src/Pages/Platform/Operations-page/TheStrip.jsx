import "./TheStrip.css";

const stats = [
  {
    tag: "Live",
    type: "live",
    number: "128",
    title: "All active",
    desc: "Filters the board",
  },
  {
    tag: "Critical",
    type: "critical",
    number: "14",
    title: "Needs attention",
    desc: "Filters the board",
  },
  {
    tag: "Blocked",
    type: "blocked",
    number: "3",
    title: "SSL hold",
    desc: "Filters the board",
  },
  {
    tag: "Warning",
    type: "warning",
    number: "7",
    title: "LFD risk",
    desc: "Filters the board",
  },
  {
    tag: "Warning",
    type: "warning",
    number: "5",
    title: "Carrier needed",
    desc: "Filters the board",
  },
  {
    tag: "Overdue",
    type: "overdue",
    number: "9",
    title: "Invoice overdue",
    desc: "Filters the board",
  },
];

export default function TheStrip() {
  const loop = [...stats, ...stats];

  return (
    <section className="strip">
      <div className="strip__head">
        <div className="strip__eyebrow">
          <span className="dot">✓</span>
          <span>The strip</span>
        </div>

        <h2>Six numbers, and each one is a filter</h2>

        <p>
          The count you are worried about is one click from the list behind it.
        </p>
      </div>

      <div className="strip__marquee">
        <div className="strip__track">
          {loop.map((item, i) => (
            <div className="strip__item" key={i}>
              <span className={`strip__pill ${item.type}`}>• {item.tag}</span>

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
