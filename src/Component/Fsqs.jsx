import { useState } from "react";
import "./Fsqs.css";

const FAQS = [
  {
    question: "What happens to the spreadsheets we run on now?",
    answer:
      "Customers, carriers and loads import from CSV or XLSX with column mapping, so you map them rather than re-type them. Nothing commits until you have seen a validation preview, and an import applies completely or not at all.",
  },
  {
    question: "Where does our data live?",
    answer:
      "On one server you control, running Postgres, object storage and the application in containers — self-hosting is the design constraint, not a deployment option. Every table carries an organisation id and Postgres row-level security enforces it inside the database, not only in a query somebody wrote in a hurry.",
  },
  {
    question: "We already run a TMS. Why another one?",
    answer:
      "Because a general TMS has no field for the parts of a drayage move that cost money. The last free day is a date with a clock against it, and the advance you fronted the steamship line is a ledger entry the container cannot release without.",
  },
  {
    question: "How long until we are running?",
    answer:
      "Your company profile, letterhead and people take an afternoon, and that is what makes the first document the system generates carry your docket rather than ours. Your own records set the real timeline: a customer list with three spellings of one consignee does not import in a single pass.",
  },
  {
    question: "What if a carrier is not in the system yet?",
    answer:
      "You can still build the load — the carrier is created in pending compliance and the compliance team is notified. What you cannot do is paper it, because dispatch documents refuse to generate until authority, insurance and W9 are on file and a reviewer has approved in writing.",
  },
  {
    question: "Who inside our business can see what?",
    answer:
      "Eleven roles ship as defaults over a grid of twenty-four modules by six actions, and that grid is yours to edit. A sales agent sees their own book only, enforced in the query layer on the server rather than by hiding a menu item.",
  },
];

const SUPPORT_TEAM = ["Nora Vance", "Luis Ortega", "Amara Obi"];
const EMAIL = "sales@harbortms.com";

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

function ChevronIcon() {
  return (
    <svg
      className="faq__chevron"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

/**
 * Centered FAQ: a single-open accordion of common questions, then a
 * contact row for anything the list doesn't answer.
 * Dependencies: React only. Styles live in Fsqs.css.
 */
export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((current) => (current === i ? -1 : i));

  return (
    <section className="faq">
      <div className="faq__dots" aria-hidden="true" />

      <div className="faq__inner">
        <header className="faq__header">
          <p className="faq__eyebrow">Before you ask</p>
          <h2 className="faq__title">
            <span className="faq__title-line">The questions that come</span>{" "}
            <span className="faq__title-line">before a contract.</span>
          </h2>
        </header>

        <div className="faq__list">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq__item" data-open={isOpen} key={faq.question}>
                <h3 className="faq__heading">
                  <button
                    type="button"
                    className="faq__trigger"
                    id={`faq-trigger-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => toggle(i)}
                  >
                    <span>{faq.question}</span>
                    <ChevronIcon />
                  </button>
                </h3>
                <div
                  className="faq__panel"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                >
                  <div className="faq__panel-inner">
                    <p className="faq__answer">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="faq__contact">
          <div className="faq__avatars" aria-hidden="true">
            {SUPPORT_TEAM.map((name) => (
              <span className="faq__avatar" key={name}>
                {initials(name)}
              </span>
            ))}
          </div>
          <div className="faq__contact-text">
            <h3>Ask the seventh one.</h3>
            <p>
              It is answered by a person who has read your file, not by a form.
            </p>
          </div>
          <a className="faq__button" href={`mailto:${EMAIL}`}>
            <MessageIcon />
            {EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaqAccordion;
