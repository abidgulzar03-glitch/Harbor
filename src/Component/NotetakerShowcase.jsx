import { useEffect, useRef, useState } from "react";
import "./NotetakerShowcase.css";

/* ------------------------------------------------------------------ *
 *  All copy lives here. Replace any string (or pass your own object
 *  through the `content` prop). Icons: list | edit | grid | spark.
 *  Optional: scenes.load.photo = "/your-image.jpg" for the player card.
 * ------------------------------------------------------------------ */
const defaultContent = {
  brand: "Notetaker",
  badge: "New",
  heading: "Actionable recaps for every meeting",
  cardLabel: "Animated preview of Notetaker",
  tabs: [
    {
      icon: "list",
      title: "Clear summaries with next steps",
      body: "End every call with meeting summaries and next steps, so nothing falls through the cracks.",
    },
    {
      icon: "edit",
      title: "Pre-drafted follow-up emails",
      body: "Follow up faster with a ready-to-share recap and action items. Password-protect recaps or auto-share with attendees.",
    },
    {
      icon: "grid",
      title: "Works with your tools",
      body: "Add Notetaker to Zoom, Google Meet, and Teams meetings \u2014 even ones booked outside Calendly. Sync recaps to your CRM.",
    },
    {
      icon: "spark",
      title: "Instant meeting recall",
      body: "See a contact's full meeting history in one place. Ask Callie about any recap and get answers instantly.",
    },
  ],
  scenes: {
    load: {
      photo: "./Note-3.jpg",
      chip: "Emily",
      title: "Product Demo",
      subtitle: "with Jessica Barnes and 2 guests",
      sections: ["Summary", "Action Items", "Discussion"],
      count: "3",
    },
    mail: {
      title: "Share recap via email",
      highlight: "Next steps from today's meeting",
      sections: ["Summary", "Action Items"],
      options: ["Include video link", "Restrict with passcode"],
      button: "Send Email",
      sent: "Email Sent",
    },
    list: {
      title: "Recaps",
      selectAll: "Select All",
      rows: [
        { title: "Product Demo", meta: "9:00 am \u00b7 24 min 38 sec" },
        { title: "Michelle and Jenna", meta: "10:45 am \u00b7 38 min 12 sec" },
        { title: "Quick Coffee Chat", meta: "2:00 pm \u00b7 17 min 52 sec" },
      ],
      button: "Download",
      popTitle: "Integrations",
      apps: [
        { name: "Salesforce", letter: "S", color: "#00a1e0" },
        { name: "Hubspot", letter: "H", color: "#ff7a59" },
        { name: "Zapier", letter: "Z", color: "#e8492a" },
      ],
    },
    ask: {
      prompt: "What concerns did Emily have?",
      answerTitle: "Calendly Notetaker",
      answer:
        "Emily's concerned that the pricing of Quotient's software might be too high. She emphasized",
    },
  },
};

const SCENE_MS = 5000; // length of one scene; every animation timing scales to it
const T = SCENE_MS / 6000; // timings below were authored for 6 s
const S = (d) => `calc(${d}s * var(--t, 1))`;
const FADE_MS = 350;

/* ---------------------------- small helpers ---------------------------- */
const PATHS = {
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  edit: "M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4z",
  grid: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  spark:
    "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z",
  up: "M7 17L17 7M8 7h9v9",
  scissors:
    "M6 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12",
  play: "M8 5v14l11-7z",
  download: "M12 3v12M7 10l5 5 5-5M4 21h16",
  share: "M15 4l6 6-6 6M21 10H9a6 6 0 00-6 6v3",
  send: "M22 2L11 13M22 2l-7 20-4-9-9-4z",
  check: "M5 12l5 5 10-10",
  search: "M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3",
};

function Icon({ n, size = 16, fill = false, sw = 1.8 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      strokeWidth={sw}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[n]} />
    </svg>
  );
}

const Grow = ({ d = 0, h = 100, children }) => (
  <div className="nts-grow" style={{ "--d": S(d), "--h": `${h}px` }}>
    <div className="nts-pt">{children}</div>
  </div>
);

const Lines = ({ n = 3, d = 0 }) => (
  <div className="nts-lines">
    {Array.from({ length: n }, (_, i) => (
      <i
        key={i}
        style={{
          "--d": S(d + i * 0.25),
          "--w": `${[100, 88, 64, 92][i % 4]}%`,
        }}
      />
    ))}
  </div>
);

const Check = ({ d = 0 }) => (
  <span className="nts-cb">
    <b style={{ "--d": S(d) }}>
      <Icon n="check" size={11} sw={3.2} />
    </b>
  </span>
);

const Radio = ({ d, label }) => (
  <div className="nts-opt">
    <span className="nts-rd">
      <i style={{ "--d": S(d) }} />
    </span>
    {label}
  </div>
);

function useTypewriter(text, { delay = 0, speed = 45, instant = false } = {}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (instant) return undefined;
    let i = 0;
    let iv;
    const to = setTimeout(() => {
      setN(0);
      iv = setInterval(() => {
        i += 1;
        setN(i);
        if (i >= text.length) clearInterval(iv);
      }, speed);
    }, delay);
    return () => {
      clearTimeout(to);
      clearInterval(iv);
    };
  }, [text, delay, speed, instant]);
  return text.slice(0, instant ? text.length : n);
}

/* Cartoon avatar for the player card (pass scenes.load.photo to use your own image). */
const Placeholder = () => (
  <svg
    viewBox="0 0 246 176"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="nts-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stopColor="#f4eee4" />
        <stop offset="1" stopColor="#e5dccd" />
      </linearGradient>
      <clipPath id="nts-shirt">
        <path d="M50 176c4-36 33-52 73-52s69 16 73 52z" />
      </clipPath>
    </defs>
    <rect width="246" height="176" fill="url(#nts-wall)" />
    <rect x="164" y="14" width="62" height="74" rx="5" fill="#cfe7f6" />
    <path d="M195 14v74M164 51h62" stroke="#fff" strokeWidth="3" />
    <rect
      x="164"
      y="14"
      width="62"
      height="74"
      rx="5"
      fill="none"
      stroke="#fff"
      strokeWidth="4"
    />
    <circle cx="178" cy="30" r="7" fill="#fff3c4" />
    <rect x="22" y="122" width="28" height="32" rx="5" fill="#d98a5f" />
    <path
      d="M36 122c-15-8-17-32-8-44 5 14 9 26 8 44zM36 122c2-15 13-30 26-34-2 15-11 28-26 34zM36 122c-3-14-1-30 8-38 3 14 3 26-8 38z"
      fill="#5fae7a"
    />
    <path d="M86 78c-4 34 4 54 10 58h54c6-4 14-24 10-58z" fill="#4a2f22" />
    <path d="M50 176c4-36 33-52 73-52s69 16 73 52z" fill="#fbfbfd" />
    <g clipPath="url(#nts-shirt)" fill="#23232e">
      <rect x="40" y="134" width="170" height="5" />
      <rect x="40" y="146" width="170" height="5" />
      <rect x="40" y="158" width="170" height="5" />
      <rect x="40" y="170" width="170" height="5" />
    </g>
    <rect x="112" y="108" width="22" height="22" rx="8" fill="#e6b393" />
    <path d="M104 126l19 14 19-14" fill="#e6b393" />
    <ellipse cx="123" cy="84" rx="30" ry="33" fill="#f3c9a8" />
    <ellipse cx="92" cy="88" rx="5" ry="7" fill="#f3c9a8" />
    <ellipse cx="154" cy="88" rx="5" ry="7" fill="#f3c9a8" />
    <path
      d="M91 80c1-26 18-38 34-38 18 0 32 12 33 38-13-3-27-11-34-24-6 12-20 21-33 24z"
      fill="#5a3a2a"
    />
    <path
      d="M100 74c6-10 16-16 24-17"
      stroke="#7a5240"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      opacity=".6"
    />
    <path
      d="M107 79q5-4 10 0M129 79q5-4 10 0"
      stroke="#5a3a2a"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <circle cx="112" cy="87" r="3.6" fill="#2a1d18" />
    <circle cx="134" cy="87" r="3.6" fill="#2a1d18" />
    <circle cx="113.2" cy="85.8" r="1.2" fill="#fff" />
    <circle cx="135.2" cy="85.8" r="1.2" fill="#fff" />
    <circle cx="104" cy="98" r="5.5" fill="#f19a94" opacity=".55" />
    <circle cx="142" cy="98" r="5.5" fill="#f19a94" opacity=".55" />
    <path
      d="M112 99q11 11 22 0z"
      fill="#fff"
      stroke="#b5533c"
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

/* -------------------------------- scenes -------------------------------- */
function SceneLoad({ c }) {
  return (
    <>
      <div className="nts-glass nts-player nts-pop">
        <div className="nts-media">
          {c.photo ? <img src={c.photo} alt="" /> : <Placeholder />}
          <span className="nts-chip">{c.chip}</span>
        </div>
        <div className="nts-scrub">
          <i />
        </div>
        <div className="nts-ctrl">
          <Icon n="scissors" size={14} />
          <span className="nts-play">
            <Icon n="play" size={13} fill />
          </span>
          <em>1x</em>
        </div>
      </div>
      <div className="nts-c nts-c--detail">
        <div className="nts-glass nts-slide" style={{ "--d": S(0.9) }}>
          <h4>{c.title}</h4>
          <p className="nts-sub">{c.subtitle}</p>
          <Grow d={1.7} h={92}>
            <b className="nts-lbl">{c.sections[0]}</b>
            <Lines n={3} d={1.9} />
          </Grow>
          <Grow d={2.7} h={92}>
            <b className="nts-lbl">
              {c.sections[1]}
              <span className="nts-count">{c.count}</span>
            </b>
            <Lines n={3} d={2.9} />
          </Grow>
          <Grow d={3.7} h={70}>
            <b className="nts-lbl">{c.sections[2]}</b>
            <Lines n={2} d={3.9} />
          </Grow>
        </div>
      </div>
    </>
  );
}

function SceneMail({ c }) {
  return (
    <div className="nts-c nts-c--mail">
      <div className="nts-glass nts-pop">
        <div className="nts-head">
          <span className="nts-ic">
            <Icon n="share" size={15} />
          </span>
          <h4>{c.title}</h4>
        </div>
        <Grow d={0.8} h={48}>
          <div className="nts-hl">{c.highlight}</div>
        </Grow>
        <Grow d={1.3} h={92}>
          <b className="nts-lbl">{c.sections[0]}</b>
          <Lines n={3} d={1.5} />
        </Grow>
        <Grow d={1.9} h={92}>
          <b className="nts-lbl">{c.sections[1]}</b>
          <Lines n={3} d={2.1} />
        </Grow>
        <Grow d={2.5} h={80}>
          <Radio d={3.1} label={c.options[0]} />
          <Radio d={3.8} label={c.options[1]} />
        </Grow>
        <Grow d={2.9} h={66}>
          <div className="nts-btn">
            <span className="a">
              <Icon n="send" size={14} />
              {c.button}
            </span>
            <span className="b">
              <Icon n="check" size={15} sw={2.6} />
              {c.sent}
            </span>
          </div>
        </Grow>
      </div>
    </div>
  );
}

function SceneList({ c }) {
  return (
    <>
      <div className="nts-c nts-c--recaps">
        <div className="nts-shift">
          <div className="nts-glass nts-pop">
            <h4>{c.title}</h4>
            <div className="nts-all">
              <Check d={0.5} />
              <span>{c.selectAll}</span>
            </div>
            <ul className="nts-rows">
              {c.rows.map((r, i) => (
                <li key={r.title}>
                  <Check d={0.9 + i * 0.3} />
                  <span className="nts-thumb">
                    <Icon n="play" size={10} fill />
                  </span>
                  <span className="nts-rt">
                    <b>{r.title}</b>
                    <i>{r.meta}</i>
                  </span>
                </li>
              ))}
            </ul>
            <Grow d={2} h={64}>
              <div className="nts-btn">
                <span>
                  <Icon n="download" size={14} />
                  {c.button}
                </span>
              </div>
            </Grow>
          </div>
        </div>
      </div>
      <div className="nts-c nts-c--pop">
        <div className="nts-glass nts-popover">
          <h4>{c.popTitle}</h4>
          {c.apps.map((a, i) => (
            <div className="nts-app" key={a.name}>
              <span className="nts-mono" style={{ background: a.color }}>
                {a.letter}
              </span>
              <span>{a.name}</span>
              <span className={`nts-tg${i === 0 ? " on" : ""}`}>
                <i />
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function SceneAsk({ c, instant }) {
  const typed = useTypewriter(c.prompt, {
    delay: 900 * T,
    speed: 55 * T,
    instant,
  });
  const answer = useTypewriter(c.answer, {
    delay: 4000 * T,
    speed: 14 * T,
    instant,
  });
  return (
    <>
      <div className="nts-answer">
        <div className="nts-glass nts-rise" style={{ "--d": S(3.5) }}>
          <h4>
            {c.answerTitle}
            <Icon n="spark" size={15} fill />
          </h4>
          <p>{answer}</p>
          <Lines n={2} d={5} />
        </div>
      </div>
      <div className="nts-pillwrap">
        <div className="nts-glass nts-pill nts-pop" style={{ "--d": S(0.2) }}>
          <span className="nts-sq">
            <Icon n="search" size={19} />
            <Icon n="spark" size={10} fill />
          </span>
          <span className="nts-typed">
            {typed}
            <u />
          </span>
          <Icon n="send" size={18} />
        </div>
      </div>
    </>
  );
}

const SCENES = [SceneLoad, SceneMail, SceneList, SceneAsk];
const SCENE_KEYS = ["load", "mail", "list", "ask"];

/* Decorative waveform bars + stripes (positions are deterministic). */
const BAR_N = 20;
const BARS = Array.from({ length: BAR_N }, (_, i) => {
  const f = i / (BAR_N - 1);
  const c = [250 - 100 * f, 208 - 18 * f, 232 + 23 * f].map(Math.round);
  return {
    h: [100, 100, 70, 100, 52, 100, 100, 78, 100, 60][i % 10],
    d: (i % 7) * 0.2,
    bg: `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${(0.85 - 0.28 * f).toFixed(2)})`,
  };
});

/* -------------------------------- main -------------------------------- */
export default function NotetakerShowcase({
  content = defaultContent,
  className = "",
}) {
  const [active, setActive] = useState(0);
  const [run, setRun] = useState(0);
  const [leaveKey, setLeaveKey] = useState("");
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [k, setK] = useState(1);
  const rootRef = useRef(null);
  const cardRef = useRef(null);
  const sceneKey = `${active}-${run}-${inView}`;
  const leaving = leaveKey === sceneKey;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = (e) => setReduced(e.matches);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
      threshold: 0.35,
    });
    io.observe(rootRef.current);
    const ro = new ResizeObserver(([e]) => setK(e.contentRect.width / 512));
    ro.observe(cardRef.current);
    return () => {
      io.disconnect();
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!inView || reduced) return undefined;
    const t1 = setTimeout(() => setLeaveKey(sceneKey), SCENE_MS - FADE_MS);
    const t2 = setTimeout(() => {
      setActive((a) => (a + 1) % 4);
      setRun((r) => r + 1);
    }, SCENE_MS);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [active, run, inView, reduced, sceneKey]);

  const select = (i) => {
    setActive(i);
    setRun((r) => r + 1);
  };
  const Scene = SCENES[active];

  return (
    <section ref={rootRef} className={`nts ${className}`}>
      <div className="nts-copy">
        <div>
          <div className="nts-brand">
            <span className="nts-logo">
              <Icon n="edit" size={14} />
            </span>
            {content.brand}
            <span className="nts-new">{content.badge}</span>
          </div>
          <h2 className="nts-h">{content.heading}</h2>
        </div>

        <ul className="nts-tabs">
          {content.tabs.map((t, i) => {
            const on = i === active;
            return (
              <li key={t.title} className="nts-tab" data-active={on}>
                <button
                  type="button"
                  aria-expanded={on}
                  onClick={() => select(i)}
                >
                  <span className="nts-th">
                    <Icon n={t.icon} size={16} />
                    {t.title}
                  </span>
                  <span className="nts-tb">
                    <span>
                      <span className="nts-body">{t.body}</span>
                    </span>
                  </span>
                </button>
                <span className="nts-go">
                  <Icon n="up" size={13} />
                </span>
                {on && !reduced && (
                  <span
                    key={`${run}-${inView}`}
                    className="nts-prog"
                    style={{
                      animationDuration: `${SCENE_MS}ms`,
                      animationPlayState: inView ? "running" : "paused",
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div
        ref={cardRef}
        className="nts-card"
        data-scene={active}
        role="img"
        aria-label={content.cardLabel}
      >
        <div className="nts-glow" />
        <div className="nts-bars">
          {BARS.map((b, i) => (
            <i
              key={i}
              style={{
                height: `${b.h}%`,
                background: b.bg,
                animationDelay: `${b.d}s`,
              }}
            />
          ))}
        </div>
        <div className="nts-stripes">
          <div />
          <div />
        </div>
        <div className="nts-stage" style={{ transform: `scale(${k})` }}>
          <div
            key={sceneKey}
            className={`nts-scene${leaving ? " is-leaving" : ""}`}
            style={{ "--t": T }}
          >
            <Scene c={content.scenes[SCENE_KEYS[active]]} instant={reduced} />
          </div>
        </div>
      </div>
    </section>
  );
}
