import "./Operations.css";
import TheStrip from "./TheStrip";
import TheShipmentsBoard from "./TheShipmentsBoard";
import TasksExceptions from "./TasksExceptions";
import TheStepper from "./TheStepper";
import Container360 from "./Container360";
import DemoExperience from "./DemoExperience";

export default function Operations() {
  return (
    <main className="operations-page">
      <section className="op-hero">
        <div className="op-badge">
          <div className="op-icon">
            <svg
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8.2l2.6 2.6L12 5.4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="op-label">Operations</span>
        </div>

        <h1>
          The board, and
          <br />
          what&rsquo;s on fire
        </h1>

        <p>
          A drayage desk does not need a prettier list of loads. It needs to
          know which four boxes out of a hundred and twenty-eight will cost
          money today.
        </p>
      </section>

      <TheStrip />
      <TheShipmentsBoard />
      <TasksExceptions />
      <TheStepper />
      <Container360 />
      <DemoExperience />
    </main>
  );
}
