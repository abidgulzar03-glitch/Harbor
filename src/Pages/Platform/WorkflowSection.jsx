import { useEffect, useRef, useState } from "react";
import "./WorkflowSection.css";

const cards = [
  {
    id: "01",
    title: "Arrival notice in",
    text: "Upload the line's PDF. One notice raises one load, or forty on the same booking.",
  },
  {
    id: "02",
    title: "Load created",
    text: "Parties, equipment, stops, charges. Flag SSL or customs and the advance shells exist before anyone forgets them.",
  },
  {
    id: "03",
    title: "Posted to the boards",
    text: "DAT, Truckstop and Loadmatch from the record itself. A retry cannot post your load twice at two rates.",
  },
  {
    id: "04",
    title: "Rates return",
    text: "Offers land sorted, with MC, ETA and compliance state. Nothing is auto-selected on price.",
  },
  {
    id: "05",
    title: "Carrier compliance",
    text: "Authority, USDOT, insurance, W9 and signature. Short of five, the dispatch sheet does not generate.",
    badge: "Blocked",
  },
  {
    id: "06",
    title: "Customer credit",
    text: "Exposure counts the loads still in the air. Past the limit an approver decides, in writing.",
    badge: "Blocked",
  },
  {
    id: "07",
    title: "Dispatched and tracked",
    text: "Eight milestones. Each sets a status, stamps a date, writes the audit event and tells the agent.",
  },
  {
    id: "08",
    title: "Invoiced and paid",
    text: "Delivery starts both aging clocks in one transaction. An accessorial that exists is billed.",
  },
];

export default function WorkflowSection() {
  const sectionRef = useRef(null);
  const mobileRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const CARD_WIDTH = 360;
  const GAP = 60;
  const STEP = CARD_WIDTH + GAP;

  /* Responsive */
  useEffect(() => {
    const resize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  /* Desktop sticky horizontal */
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const current = Math.min(Math.max(-rect.top, 0), total);

      const progress = total > 0 ? current / total : 0;
      const maxMove = (cards.length - 1) * STEP;
      const move = progress * maxMove;

      setTranslateX(move);
      setActiveIndex(Math.round(move / STEP));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  /* Mobile auto slider */
  useEffect(() => {
    if (!isMobile) return;

    const container = mobileRef.current;
    if (!container) return;

    let index = 0;

    const interval = setInterval(() => {
      const card = container.children[index];

      if (card) {
        container.scrollTo({
          left: card.offsetLeft - 20,
          behavior: "smooth",
        });
      }

      setActiveIndex(index);
      index = (index + 1) % cards.length;
    }, 2500);

    return () => clearInterval(interval);
  }, [isMobile]);

  /* Update active card while swiping */
  const handleMobileScroll = () => {
    if (!isMobile) return;

    const container = mobileRef.current;
    if (!container) return;

    const cardWidth = container.children[0]?.clientWidth || 1;
    const gap = 16;
    const index = Math.round(container.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(index, cards.length - 1));
  };

  return (
    <section className="wf-section" ref={sectionRef}>
      <div className="wf-sticky">
        <div
          ref={mobileRef}
          onScroll={handleMobileScroll}
          className="wf-track"
          style={
            isMobile
              ? {}
              : {
                  transform: `translateX(-${translateX}px)`,
                }
          }
        >
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`wf-card ${index === activeIndex ? "active" : ""}`}
            >
              <div className="card-top">
                <span className="number">{card.id}</span>

                {card.badge && <span className="badge">{card.badge}</span>}
              </div>

              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
