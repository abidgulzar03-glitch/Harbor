import { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./AutoImageSlider.css";
import { FaWallet, FaHourglassHalf, FaStar, FaLeaf } from "react-icons/fa";

const cards = [
  {
    id: 1,
    variant: "triangles",
    person: "/Auto-img-3.jpg",
    Icon: FaWallet,
    iconBg: "#2fbfb0",
    left: "Payment",
    right: "Received",
  },
  {
    id: 2,
    variant: "stripes",
    person: "/Auto-img-2.jpg",
    Icon: FaHourglassHalf,
    iconBg: "#6ea8f5",
    left: "Interview",
    right: "Booked",
  },
  {
    id: 3,
    variant: "bars",
    barColor: "#f7f4cf",
    person: "/Auto-img-4.jpg",
    Icon: FaStar,
    iconBg: "#d4ec8a",
    left: "Discovery",
    right: "Scheduled",
  },
  {
    id: 4,
    variant: "bars",
    barColor: "#e6b8f0",
    person: "/Auto-img-1.jpeg",
    Icon: FaLeaf,
    iconBg: "#c7a6f0",
    left: "Meeting",
    right: "Summarized",
  },
];

const bars = Array.from({ length: 48 }, (_, i) => ({
  h: 35 + Math.abs(Math.sin(i * 1.7)) * 65,
  d: (i % 11) * 0.14,
  o: 0.55 + (i % 4) * 0.15,
}));

const rows = Array.from({ length: 10 }, (_, i) => ({
  c: i % 2 === 0 ? "#7fb0f5" : "#f2aac6",
  x: 30 + ((i * 37) % 90),
  s: 3 + (i % 5) * 0.9,
  w: 26 + (i % 3) * 14,
}));

function Background({ variant, barColor }) {
  if (variant === "bars") {
    return (
      <div className="ais-anim ais-bars" style={{ "--bar": barColor }}>
        {bars.map((b, i) => (
          <span
            key={i}
            style={{ "--h": `${b.h}%`, "--d": `${b.d}s`, opacity: b.o }}
          />
        ))}
      </div>
    );
  }

  if (variant === "stripes") {
    return (
      <div className="ais-anim ais-stripes">
        {rows.map((r, i) => (
          <span
            key={i}
            style={{
              "--c": r.c,
              "--x": `${r.x}px`,
              "--s": `${r.s}s`,
              "--w": `${r.w}px`,
            }}
          />
        ))}
      </div>
    );
  }

  return <div className="ais-anim ais-triangles" />;
}

const GAP = 24; // must match "gap" in .ais-track
const DELAY = 3000; // 3 seconds between slides
const SLIDE_TIME = 700; // must match the transition time in the CSS (0.7s)

export default function AutoImageSlider() {
  const total = cards.length;
  // 3 copies: we always stay in the middle copy, so there are cards on both sides
  const loop = [...cards, ...cards, ...cards];

  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const [index, setIndex] = useState(total); // start on the first card of the middle copy
  const [step, setStep] = useState(0); // card width + gap
  const [offset, setOffset] = useState(0); // space on the left so the card is centered
  const [jump, setJump] = useState(false);

  // measure card size and center position (re-measured on resize)
  useLayoutEffect(() => {
    const measure = () => {
      const first = trackRef.current?.children[0];
      const wrap = wrapperRef.current;
      if (first && wrap) {
        setStep(first.offsetWidth + GAP);
        setOffset((wrap.clientWidth - first.offsetWidth) / 2);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // move one card every 3 seconds
  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => i + 1);
    }, DELAY);
    return () => clearInterval(id);
  }, []);

  // when we reach the end of the middle copy, jump back silently (looks identical)
  useEffect(() => {
    if (index !== total * 2) return;
    const t = setTimeout(() => {
      setJump(true);
      setIndex(total);
      requestAnimationFrame(() => requestAnimationFrame(() => setJump(false)));
    }, SLIDE_TIME);
    return () => clearTimeout(t);
  }, [index, total]);

  return (
    <div
      ref={wrapperRef}
      className="ais-wrapper"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={trackRef}
        className={`ais-track${jump ? " no-anim" : ""}`}
        style={{ transform: `translateX(${offset - index * step}px)` }}
      >
        {loop.map(
          ({ id, variant, barColor, person, Icon, iconBg, left, right }, i) => (
            <div
              className={`ais-card ais-theme-${id}${i === index ? " is-active" : ""}`}
              key={`${id}-${i}`}
            >
              {/* colored box: shorter than the card so the head pops out above it */}
              <div className="ais-bgbox">
                <Background variant={variant} barColor={barColor} />
                <div className="ais-grain" />
              </div>

              <img
                className="ais-girl"
                src={person}
                alt={`${left} ${right}`}
                draggable="false"
              />

              <div className="ais-label">
                <span className="ais-pill ais-pill-left">
                  <span className="ais-icon" style={{ background: iconBg }}>
                    <Icon />
                  </span>
                  {left}
                </span>
                <span className="ais-pill ais-pill-right">{right}</span>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
