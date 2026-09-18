import { useState, useEffect } from "react";
import {
  Calendar,
  Mail,
  FileText,
  Link2,
  Users,
  Check,
  ChevronDown,
} from "lucide-react";
import "./SchedulingSection.css";

const accordionData = [
  {
    id: 1,
    icon: <Calendar size={20} />,
    title: "Full control over your calendar",
    description:
      "Connect your calendars, set your hours, and control exactly when you're available to meet.",
    cardContent: (
      <div className="ui-window">
        <div className="ui-pill">Scheduling</div>
        <h3>Availability</h3>

        <div className="ui-select">
          <span>4</span>
          <small>Meetings per day</small>
        </div>

        <div className="ui-select">
          <span>15 min</span>
          <small>Meeting Buffer</small>
        </div>

        <div className="schedule-label">Schedule · Custom</div>

        <div className="ui-days">
          {["M", "T", "W"].map((day) => (
            <div className="day" key={day}>
              <b>{day}</b>
              <span>9:00am – 5:00pm</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  {
    id: 2,
    icon: <Mail size={20} />,
    title: "Automated email & text workflows",
    description:
      "Reduce no-shows with personalized reminders and automated scheduling.",
    cardContent: (
      <div className="ui-window center">
        <div className="ui-pill">Workflow</div>

        <div className="mail-circle">✉</div>

        <h3>Send email reminder</h3>

        <div className="workflow-box">24 hours before event starts</div>

        <div className="workflow-line" />

        <button className="confirm-btn">
          <Check size={16} />
          Email reminder sent
        </button>
      </div>
    ),
  },

  {
    id: 3,
    icon: <FileText size={20} />,
    title: "Website embeds and routing forms",
    description:
      "Let visitors schedule right from your website with routing forms.",
    cardContent: (
      <div className="ui-window">
        <div className="logos">
          <div>☁</div>
          <div>◎</div>
          <div>▮▮</div>
        </div>

        <h3>Get a demo</h3>

        <div className="input-box">Work email</div>

        <div className="input-box">
          Company Size
          <ChevronDown size={16} />
        </div>

        <div className="dropdown">
          <div>1–10</div>
          <div>11–100</div>
          <div>101–500</div>
          <div className="active">500+</div>
        </div>
      </div>
    ),
  },

  {
    id: 4,
    icon: <Link2 size={20} />,
    title: "Scheduling whenever, wherever",
    description:
      "Access Calendly from the browser, mobile app and 100+ integrations.",
    cardContent: (
      <div className="ui-window center">
        <div className="route-tag">If company size &gt; 500</div>

        <div className="avatar-photo" />

        <h4>Lori Bryson</h4>

        <h3>Discovery Call</h3>

        <div className="meta">1 hour · Zoom</div>

        <button className="confirm-btn">
          <Check size={16} />
          Confirmed
        </button>
      </div>
    ),
  },

  {
    id: 5,
    icon: <Users size={20} />,
    title: "Tools for teams of all sizes",
    description:
      "Grant team permissions, establish round-robin scheduling, and manage admin distribution across your organization.",
    cardContent: (
      <div className="ui-window">
        <h3>Admin Management</h3>

        {[
          ["Dominic Mills", "Admin"],
          ["Emily Kim", "Member"],
          ["Lars Hansen", "Viewer"],
        ].map(([name, role]) => (
          <div className="member" key={name}>
            <div className="avatar" />

            <div className="member-info">
              <strong>{name}</strong>
              <small>{role}</small>
            </div>

            <div className="toggle on" />
          </div>
        ))}
      </div>
    ),
  },
];

export default function SchedulingSection() {
  const [activeId, setActiveId] = useState(1);

  /* AUTO CHANGE */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveId((prev) => (prev === accordionData.length ? 1 : prev + 1));
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const activeItem = accordionData.find((item) => item.id === activeId);

  return (
    <section className="scheduling-container">
      <div className="scheduling-content">
        {/* LEFT SIDE */}
        <div className="accordion-list">
          <span className="section-badge">Scheduling</span>

          <h2>A better way to book your meetings</h2>

          {accordionData.map((item) => {
            const isOpen = activeId === item.id;

            return (
              <div
                key={item.id}
                className={`accordion-item ${isOpen ? "active" : ""}`}
                onClick={() => setActiveId(item.id)}
              >
                <div className="accordion-header">
                  <div className="title-wrap">
                    {item.icon}
                    <span>{item.title}</span>
                  </div>

                  <span className="accordion-arrow">{isOpen ? "−" : "+"}</span>
                </div>

                {isOpen && (
                  <div className="accordion-body">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* RIGHT SIDE */}
        <div className="preview-stage">
          <div key={activeId} className="preview-card animate-card">
            {activeItem.cardContent}
          </div>
        </div>
      </div>
    </section>
  );
}
