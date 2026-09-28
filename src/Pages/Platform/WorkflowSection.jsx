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

const CARD_WIDTH = 360;
const GAP = 60;
const STEP = CARD_WIDTH + GAP;

export default function WorkflowSection() {
  const sectionRef = useRef(null);
  const mobileRef = useRef(null);

  const [translateX, setTranslateX] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  /* =========================
     RESPONSIVE
  ========================= */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =========================
     DESKTOP HORIZONTAL SCROLL
  ========================= */
  useEffect(() => {
    if (isMobile) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;

      window.requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (!section) {
          ticking = false;
          return;
        }

        const rect = section.getBoundingClientRect();

        const totalScroll = section.offsetHeight - window.innerHeight;

        const currentScroll = Math.min(Math.max(-rect.top, 0), totalScroll);

        const progress = totalScroll > 0 ? currentScroll / totalScroll : 0;

        const maxMove = (cards.length - 1) * STEP;

        const move = progress * maxMove;

        setTranslateX(move);
        setActiveIndex(Math.min(cards.length - 1, Math.round(move / STEP)));

        ticking = false;
      });

      ticking = true;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  /* =========================
     MOBILE AUTO SLIDER
  ========================= */
  useEffect(() => {
    if (!isMobile) return;

    const container = mobileRef.current;

    if (!container) return;

    let index = 0;

    const interval = setInterval(() => {
      const cardsElements = container.children;
      const card = cardsElements[index];

      if (card) {
        container.scrollTo({
          left: card.offsetLeft - 20,
          behavior: "smooth",
        });
      }

      setActiveIndex(index);

      index = (index + 1) % cards.length;
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [isMobile]);

  /* =========================
     MOBILE SWIPE
  ========================= */
  const handleMobileScroll = () => {
    if (!isMobile) return;

    const container = mobileRef.current;

    if (!container) return;

    const firstCard = container.children[0];

    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;

    const gap = 16;

    const index = Math.round(container.scrollLeft / (cardWidth + gap));

    setActiveIndex(Math.min(Math.max(index, 0), cards.length - 1));
  };

  return (
    <section ref={sectionRef} className="wf-section">
      <div className="wf-sticky">
        <div
          ref={mobileRef}
          className="wf-track"
          onScroll={handleMobileScroll}
          style={
            isMobile
              ? undefined
              : {
                  transform: `translate3d(-${translateX}px, 0, 0)`,
                }
          }
        >
          {cards.map((card, index) => (
            <article
              key={card.id}
              className={`wf-card ${index === activeIndex ? "active" : ""}`}
            >
              <div className="card-top">
                <span className="number">{card.id}</span>

                {card.badge && <span className="badge">{card.badge}</span>}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
