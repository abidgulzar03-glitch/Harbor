import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./BookDemoNew.css";

const steps = [
  {
    tag: "Step 1",
    title: "Send one container + invoice",
    description: "Real shipment data, not sample data.",
  },
  {
    tag: "Step 2",
    title: "We load them live",
    description: "Your lane, customer, accessorials.",
  },
  {
    tag: "Step 3",
    title: "Run the gates",
    description: "Against a carrier you pick. See what refuses.",
  },
];

const EMAIL = "you@company.com";
const TIME = "Forty minutes, no slides";

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function BookDemoNew() {
  const [run, setRun] = useState(0);
  const [phase, setPhase] = useState(0);
  const [emailChars, setEmailChars] = useState(0);
  const [timeChars, setTimeChars] = useState(0);

  useEffect(() => {
    const timers = [];
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    let emailIv, timeIv;

    at(300, () => setPhase(1));

    at(900, () => {
      setPhase(2);
      let i = 0;
      emailIv = setInterval(() => {
        i++;
        setEmailChars(i);
        if (i >= EMAIL.length) clearInterval(emailIv);
      }, 32);
    });

    at(900 + EMAIL.length * 32 + 200, () => {
      setPhase(3);
      let i = 0;
      timeIv = setInterval(() => {
        i++;
        setTimeChars(i);
        if (i >= TIME.length) clearInterval(timeIv);
      }, 28);
    });

    const afterType = 900 + EMAIL.length * 32 + 200 + TIME.length * 28 + 300;

    at(afterType, () => setPhase(4));
    at(afterType + 700, () => setPhase(5));
    at(afterType + 1400, () => setPhase(6));
    at(afterType + 2100, () => setPhase(7));
    at(afterType + 3800, () => setPhase(8));
    at(afterType + 4500, () => {
      setPhase(0);
      setEmailChars(0);
      setTimeChars(0);
      setRun((r) => r + 1);
    });

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(emailIv);
      clearInterval(timeIv);
    };
  }, [run]);

  return (
    <section className="book-demo-new">
      <div className="book-demo-container">
        {/* LEFT VISUAL */}
        <motion.div
          className="book-demo-visual"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="bd-orb bd-orb-1" />
          <div className="bd-orb bd-orb-2" />
          <div className="bd-orb bd-orb-3" />

          <div className="book-demo-visual-inner">
            {/* Top card */}
            <div
              className={
                "bd-float-card bd-float-top" +
                (phase >= 1 ? " bd-show" : "") +
                (phase >= 2 ? " bd-filled" : "") +
                (phase >= 4 ? " bd-idle-float" : "")
              }
            >
              <div className="bd-shine" />
              <h4>Book a demo</h4>
              <div
                className={"bd-field" + (phase >= 2 ? " bd-active-field" : "")}
              >
                <span className={emailChars > 0 ? "bd-typed" : ""}>
                  {emailChars > 0 ? EMAIL.slice(0, emailChars) : "Work email"}
                  {phase === 2 && emailChars < EMAIL.length && (
                    <span className="bd-cursor" />
                  )}
                </span>
              </div>
              <div
                className={
                  "bd-field bd-select" + (phase >= 3 ? " bd-active-field" : "")
                }
              >
                <span className={timeChars > 0 ? "bd-typed" : ""}>
                  {timeChars > 0 ? TIME.slice(0, timeChars) : "Select time"}
                  {phase === 3 && timeChars < TIME.length && (
                    <span className="bd-cursor" />
                  )}
                </span>
              </div>
              <a
                href="#"
                className={
                  "bd-submit" +
                  (phase >= 4 ? " bd-ready" : "") +
                  (phase >= 7 ? " bd-success" : "")
                }
              >
                {phase >= 7 ? "✓ Booked" : "Book a demo"}
              </a>
            </div>

            <div className={"bd-connector" + (phase >= 5 ? " bd-show" : "")} />

            <div
              className={
                "bd-float-pill" +
                (phase >= 5 ? " bd-show" : "") +
                (phase >= 7 ? " bd-pill-done" : "")
              }
            >
              <span className="bd-pill-dots">
                <span />
                <span />
                <span />
              </span>
              {phase >= 7
                ? "Gates running on your shipment"
                : "If real shipment data → run the gates live"}
            </div>

            <div className={"bd-connector" + (phase >= 6 ? " bd-show" : "")} />

            <div
              className={
                "bd-float-card bd-float-bottom" +
                (phase >= 6 ? " bd-show" : "") +
                (phase >= 7 ? " bd-pop bd-idle-float" : "")
              }
            >
              <div
                className={"bd-avatar" + (phase >= 7 ? " bd-avatar-glow" : "")}
              >
                {phase >= 7 ? "✓" : "H"}
              </div>
              <div className="bd-outcome">
                <span className="bd-outcome-label">You keep the paperwork</span>
                <span className="bd-outcome-title">
                  {phase >= 7 ? "Demo confirmed" : "Whether or not you buy"}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COPY */}
        <motion.div
          className="book-demo-copy"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="book-demo-eyebrow">Book a demo</span>
          <h1 className="book-demo-heading">
            See it against your own containers.
          </h1>
          <p className="book-demo-desc">
            You send one container number and one invoice beforehand. We load
            them live and run the gates against a carrier you pick, and show you
            what refuses. You keep the paperwork the system generates, whether
            or not you buy.
          </p>
          <div className="book-demo-steps">
            {steps.map((step, i) => (
              <div
                className={
                  "book-demo-step" +
                  (phase >= (i === 0 ? 1 : i === 1 ? 5 : 6)
                    ? " bd-step-active"
                    : "")
                }
                key={i}
              >
                <span className="book-demo-step-tag">{step.tag}</span>
                <div>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </div>
              </div>
            ))}
          </div>
          <a href="#" className="book-demo-cta">
            Book a demo
            <ArrowRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
