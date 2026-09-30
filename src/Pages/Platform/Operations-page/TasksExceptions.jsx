import "./TasksExceptions.css";

const tasks = [
  {
    type: "critical",
    badge: "Critical",
    title: "SSL / customs hold",
    text: "The box is not released. Nothing advances until the advance is recorded in full.",
  },
  {
    type: "critical",
    badge: "Critical",
    title: "Last free day passed",
    text: "Demurrage is accruing today and Demurrage Watch has the rebill already built.",
  },
  {
    type: "critical",
    badge: "Critical",
    title: "Negative margin",
    text: "The carrier rate is above the customer rate. The load says who agreed to it, and when.",
  },
  {
    type: "warning",
    badge: "Warning",
    title: "Overdue receivable",
    text: "Past terms, and on the collections worklist with the whole aging picture beside it.",
  },
  {
    type: "warning",
    badge: "Warning",
    title: "Carrier needed, clock running",
    text: "No carrier and free time ending. Untouched today, this becomes the demurrage exception.",
  },
  {
    type: "warning",
    badge: "Warning",
    title: "Last free day approaching",
    text: "Get it out, or decide to pay per diem deliberately rather than by accident.",
  },
  {
    type: "warning",
    badge: "Warning",
    title: "Running past ETA",
    text: "Behind the ETA the customer was given. Tell them before they call you.",
  },
  {
    type: "warning",
    badge: "Warning",
    title: "Empty return outstanding",
    text: "Delivered, box still out. Per diem accrues on container and chassis, quietly.",
  },
];

export default function TasksExceptions() {
  return (
    <section className="tasks">
      <div className="tasks__wrap">
        <div className="tasks__left">
          <div className="tasks__sticky">
            <span className="tasks__label">● Tasks & exceptions</span>

            <h2>Eight things that cost money, each in English</h2>

            <p>
              One risk model produces this list, the board badges and the tiles
              above — so the count and the list behind it cannot disagree.
            </p>
          </div>
        </div>

        <div className="tasks__right">
          {tasks.map((item, index) => (
            <div className="taskCard" key={index}>
              <span className={`taskBadge ${item.type}`}>{item.badge}</span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}

          <div className="tasks__notes">
            <div className="note">
              <h4>Muting silences the toast, not the rule</h4>
              <p>
                A muted load stays on the list, in the risk model and in the
                audit trail. A mute that deleted the problem is a slower way of
                losing the container.
              </p>
            </div>

            <div className="note">
              <h4>Expiry prepends everything else</h4>
              <p>
                A carrier whose cargo policy lapses on Friday sits above the
                operational exceptions on Tuesday. It is the one item that turns
                a delivered load into an uninsured claim.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
