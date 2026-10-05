import { useEffect, useRef, useState } from "react";
import "./CircularCarousel.css";

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

const MAX_TILT = 35; // max degrees up/down
const TILT_SPEED = 0.25; // degrees of tilt per pixel dragged

export default function CircularCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const carouselRef = useRef(null);
  const startX = useRef(0);
  const startY = useRef(0);
  const startRotation = useRef(0);
  const startTilt = useRef(0);
  const autoTimer = useRef(null);

  const total = cards.length;
  const angle = 360 / total;

  const goTo = (index) => {
    const nextIndex = (index + total) % total;

    setActiveIndex(nextIndex);
    setRotation(-nextIndex * angle);
  };

  const pauseAuto = () => {
    clearInterval(autoTimer.current);
  };

  const resumeAuto = () => {
    clearInterval(autoTimer.current);

    autoTimer.current = setInterval(() => {
      setActiveIndex((current) => {
        const nextIndex = (current + 1) % total;
        setRotation(-nextIndex * angle);
        return nextIndex;
      });
    }, 3000);
  };

  useEffect(() => {
    resumeAuto();

    return () => {
      clearInterval(autoTimer.current);
    };
  }, []);

  const handlePointerDown = (event) => {
    pauseAuto();

    setIsDragging(true);

    startX.current = event.clientX;
    startY.current = event.clientY;
    startRotation.current = rotation;
    startTilt.current = tilt;

    carouselRef.current?.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    // Nothing happens on hover, only while the mouse/finger is held down
    if (!isDragging) return;

    const deltaX = event.clientX - startX.current;
    const deltaY = event.clientY - startY.current;

    // left/right spins the ring
    setRotation(startRotation.current + deltaX * 0.35);

    // up/down tilts it (drag down = top of ring comes toward you)
    const nextTilt = startTilt.current - deltaY * TILT_SPEED;
    setTilt(Math.min(MAX_TILT, Math.max(-MAX_TILT, nextTilt)));
  };

  const handlePointerUp = (event) => {
    if (!isDragging) return;

    setIsDragging(false);

    const delta = event.clientX - startX.current;

    if (Math.abs(delta) > 50) {
      if (delta < 0) {
        goTo(activeIndex + 1);
      } else {
        goTo(activeIndex - 1);
      }
    } else {
      goTo(activeIndex);
    }

    resumeAuto();
  };

  const handlePointerLeave = (event) => {
    if (isDragging) handlePointerUp(event);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        pauseAuto();
        goTo(activeIndex + 1);
        resumeAuto();
      }

      if (event.key === "ArrowLeft") {
        pauseAuto();
        goTo(activeIndex - 1);
        resumeAuto();
      }

      if (event.key === "Home") {
        pauseAuto();
        goTo(0);
        resumeAuto();
      }

      if (event.key === "End") {
        pauseAuto();
        goTo(total - 1);
        resumeAuto();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="circular-carousel">
      <div className="circular-carousel__header">
        <span className="circular-carousel__eyebrow">The sequence</span>

        <h2>
          Eight steps.
          <br />
          Two of them refuse.
        </h2>

        <p>
          Every step stays connected, so the work moves forward without
          duplicate entry.
        </p>
      </div>

      <div
        ref={carouselRef}
        className={`circular-carousel__viewport ${
          isDragging ? "is-dragging" : ""
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onPointerLeave={handlePointerLeave}
      >
        <div
          className="circular-carousel__scene"
          style={{
            transform: `rotateX(${tilt}deg) rotateY(${rotation}deg)`,
          }}
        >
          {cards.map((card, index) => {
            const cardRotation = index * angle;

            const distance = Math.abs(
              ((index - activeIndex + total / 2) % total) - total / 2,
            );

            const isActive = distance < 0.5;

            return (
              <article
                key={card.id}
                className={`circular-carousel__card ${
                  isActive ? "is-active" : ""
                }`}
                style={{
                  transform: `
                    rotateY(${cardRotation}deg)
                    translateZ(var(--carousel-radius))
                  `,
                }}
                onClick={() => goTo(index)}
              >
                <div className="circular-carousel__card-top">
                  <span className="circular-carousel__number">{card.id}</span>

                  {card.badge && (
                    <span className="circular-carousel__badge">
                      {card.badge}
                    </span>
                  )}
                </div>

                <div className="circular-carousel__content">
                  <h3>{card.title}</h3>

                  <p>{card.text}</p>
                </div>

                <div className="circular-carousel__footer">
                  <span>Workflow</span>

                  <span className="circular-carousel__arrow">↗</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
