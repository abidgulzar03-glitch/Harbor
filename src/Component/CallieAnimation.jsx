import { useEffect, useState } from "react";
import "./CallieAnimation.css";

/* ---------- small pieces ---------- */
const Logo = ({ size = 14, radius = 4 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" style={{ flex: "none" }}>
    <rect width="24" height="24" rx={(radius * 24) / size} fill="#a9d63e" />
    <path
      d="M12 3.5l2.2 6.3 6.3 2.2-6.3 2.2L12 20.5l-2.2-6.3L3.5 12l6.3-2.2z"
      fill="#1d2a10"
    />
    <path
      d="M12 8l1.2 2.8L16 12l-2.8 1.2L12 16l-1.2-2.8L8 12l2.8-1.2z"
      fill="#a9d63e"
    />
  </svg>
);

const Avatar = ({ kind, size = 34 }) => {
  const c =
    kind === "dominic"
      ? { bg: "#5d7fb5", skin: "#6b4a38", hair: "#1c1410", shirt: "#26324a" }
      : { bg: "#e9b9a0", skin: "#d59a7c", hair: "#2a1a14", shirt: "#3b2a2a" };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      style={{ borderRadius: "50%", flex: "none" }}
    >
      <rect width="40" height="40" fill={c.bg} />
      <path d="M4 40c1-9 8-13 16-13s15 4 16 13z" fill={c.shirt} />
      <circle cx="20" cy="17" r="8" fill={c.skin} />
      <path
        d="M12 16c0-6 4-9 8-9s8 3 8 9c-2-3-5-4-8-4s-6 1-8 4z"
        fill={c.hair}
      />
    </svg>
  );
};

const Reveal = ({ show, children }) => (
  <div className={"cl-reveal" + (show ? " cl-on" : "")}>
    <div>{children}</div>
  </div>
);

const Typing = ({ text, chars }) => (
  <span>
    {text.slice(0, chars)}
    <span style={{ opacity: 0 }}>{text.slice(chars)}</span>
  </span>
);

const TABS = [
  {
    title: "Conversational scheduling",
    icon: "at",
    body: "Instead of managing scheduling links and calendars yourself, just add callie@calendly.com to the email thread. Say what you need and let Callie take it from there.",
    ms: 4600,
  },
  {
    title: "Precise coordination",
    icon: "cal",
    body: "Callie runs on your Calendly availability preferences, weighs conflicts and constraints, and always checks with you before making one-off updates.",
    ms: 5400,
  },
  {
    title: "24/7 assistance with meeting tasks",
    icon: "chat",
    body: "In Calendly, ask Callie for help with scheduling, meeting prep, recalling conversation and contact details, and more.",
    ms: 4600,
  },
];

const Icon = ({ name }) => {
  const p = {
    width: 15,
    height: 15,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.3,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  if (name === "at")
    return (
      <svg {...p}>
        <circle cx="8" cy="8" r="2.4" />
        <path d="M10.4 8v1a1.8 1.8 0 003.6 0V8a6 6 0 10-2.4 4.8" />
      </svg>
    );
  if (name === "cal")
    return (
      <svg {...p}>
        <rect x="2.5" y="3.5" width="11" height="10" rx="2" />
        <path d="M2.5 6.8h11M5.5 2v3M10.5 2v3" />
      </svg>
    );
  return (
    <svg {...p}>
      <rect x="2" y="2.5" width="8" height="6" rx="1.5" />
      <path d="M6 11.5h5.5a2 2 0 002-2V7" />
      <path d="M4 8.5v2.5" />
    </svg>
  );
};

const SAGE =
  "Callie, can you set up some time for myself and Lars tomorrow at 9?";

/* ---------- main component ---------- */
export default function CallieAnimation() {
  const [run, setRun] = useState(0);
  const [tab, setTab] = useState(0);
  const [scene, setScene] = useState("a"); // a | b | c | d
  const [aStep, setAStep] = useState(0);
  const [picked, setPicked] = useState(false);
  const [cStep, setCStep] = useState(0);
  const [chars, setChars] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const T = [];
    const at = (ms, fn) => T.push(setTimeout(fn, ms));
    let iv;

    // scene A – email card
    at(350, () => setAStep(1));
    at(1000, () => setAStep(2));
    // scene B – suggested times
    at(2700, () => setScene("b"));
    at(3700, () => setPicked(true));
    // scene C – conflict prompt
    at(5000, () => {
      setScene("c");
      setTab(1);
      setCStep(0);
    });
    at(5700, () => setCStep(1));
    at(6100, () => setCStep(2));
    at(6500, () => setCStep(3));
    at(7000, () => setCStep(4));
    at(9000, () => setCStep(5));
    // scene D – Sage Rowan
    at(10300, () => {
      setScene("d");
      setTab(2);
      setChars(0);
    });
    at(10900, () => {
      iv = setInterval(
        () => setChars((c) => (c >= SAGE.length ? c : c + 1)),
        38,
      );
    });
    at(13600, () => setFade(true));
    at(14300, () => {
      setTab(0);
      setScene("a");
      setAStep(0);
      setPicked(false);
      setCStep(0);
      setChars(0);
      setFade(false);
      setRun((r) => r + 1); // restart the loop
    });

    return () => {
      T.forEach(clearTimeout);
      clearInterval(iv);
    };
  }, [run]);

  return (
    <div id="callie-section">
      {/* ---------- left visual panel ---------- */}
      <div id="callie-visual">
        <div className="cl-stripes" />
        <div id="callie-card-stage" className={fade ? "cl-out" : undefined}>
          {scene === "a" && (
            <div id="callie-card-a" className="cl-card" key="a">
              <div className="cl-from">
                <Avatar kind="dominic" size={34} />
                <div>
                  <div className="cl-name">Dominic Mills</div>
                  <div className="cl-sub">
                    Cc{" "}
                    <span className="cl-chip">
                      <Logo size={11} radius={3} />
                      Callie <i>×</i>
                    </span>
                  </div>
                </div>
              </div>
              <Reveal show={aStep >= 1}>
                <div className="cl-ghost">
                  <b />
                  <b />
                  <b style={{ width: "72%" }} />
                </div>
                <p className="cl-msg">
                  Callie, can you help us find 30 minutes this week? Mornings
                  only, please.
                </p>
              </Reveal>
              <Reveal show={aStep >= 2}>
                <button className="cl-btn cl-purple">Send Email</button>
              </Reveal>
            </div>
          )}

          {scene === "b" && (
            <div id="callie-card-b" className="cl-card cl-tall" key="b">
              <div className="cl-peek">
                <Avatar kind="dominic" size={30} />
                <div className="cl-sub" style={{ marginLeft: 0 }}>
                  Cc{" "}
                  <span className="cl-chip">
                    <Logo size={11} radius={3} />
                    Callie <i>×</i>
                  </span>
                </div>
              </div>
              <div className="cl-from">
                <div className="cl-logoBig">
                  <Logo size={34} radius={9} />
                </div>
                <div>
                  <div className="cl-name">Callie</div>
                  <div className="cl-sub">
                    Cc Dominic Mills, Tori Matthews ▾
                  </div>
                </div>
              </div>
              <p className="cl-msg">
                Hi Dominic, Happy to help! Here are some suggested times:
              </p>
              <div className="cl-days">
                {[
                  ["Thursday", "September 25", ["9:00 AM", "10:00 AM"]],
                  ["Friday", "September 26", ["9:30 AM", "11:00 AM"]],
                ].map(([d, s, slots]) => (
                  <div className="cl-day" key={d}>
                    <div className="cl-dname">{d}</div>
                    <div className="cl-ddate">{s}</div>
                    {slots.map((t) => (
                      <div
                        key={t}
                        className={
                          "cl-slot" +
                          (picked && t === "9:30 AM" ? " cl-sel" : "")
                        }
                      >
                        {t}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <button className="cl-btn cl-lime">
                <Logo size={14} radius={4} />
                &nbsp;Book with Callie
              </button>
            </div>
          )}

          {scene === "c" && (
            <div id="callie-card-c" className="cl-card" key="c">
              <div className="cl-from">
                <div className="cl-logoBig">
                  <Logo size={34} radius={9} />
                </div>
                <div>
                  <div className="cl-name">Callie</div>
                  <div className="cl-sub">To Dominic Mills ▾</div>
                </div>
              </div>
              <Reveal show={cStep >= 1}>
                <p className="cl-msg cl-tight">
                  You’re available on Tuesday at 8am
                </p>
              </Reveal>
              <Reveal show={cStep >= 2}>
                <p className="cl-msg cl-tight">
                  but it conflicts with your workout.
                </p>
              </Reveal>
              <Reveal show={cStep >= 3}>
                <p className="cl-msg cl-tight">
                  Do you want to book it anyway?
                </p>
              </Reveal>
              <Reveal show={cStep >= 4}>
                <div className="cl-row">
                  <button
                    className={
                      "cl-btn cl-olive" + (cStep >= 5 ? " cl-done" : "")
                    }
                  >
                    {cStep >= 5 ? "✓ Confirmed" : "Confirm"}
                  </button>
                  <button
                    className={
                      "cl-btn cl-gray" + (cStep >= 5 ? " cl-gone" : "")
                    }
                  >
                    Deny
                  </button>
                </div>
              </Reveal>
            </div>
          )}

          {scene === "d" && (
            <div id="callie-card-d" className="cl-card" key="d">
              <div className="cl-from">
                <Avatar kind="sage" size={34} />
                <div>
                  <div className="cl-name">Sage Rowan</div>
                  <div className="cl-sub">To Callie, Lars Hansen ▾</div>
                </div>
              </div>
              <p className="cl-msg" style={{ minHeight: 38 }}>
                <Typing text={SAGE} chars={chars} />
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ---------- right copy ---------- */}
      <div id="callie-copy">
        <div className="cl-badge">
          <Logo size={14} radius={4} />
          <span>Callie</span>
          <em>Beta</em>
        </div>
        <h1 id="callie-heading">Meet Callie, your AI assistant</h1>

        <div id="callie-tabs">
          {TABS.map((t, i) => (
            <div
              id={"callie-tab-" + i}
              key={t.title}
              className={"cl-tab" + (tab === i ? " cl-active" : "")}
            >
              <div className="cl-thead">
                <Icon name={t.icon} />
                <span>{t.title}</span>
                {tab === i && <span className="cl-arrow">↗</span>}
              </div>
              <div className="cl-tbody">
                <div>
                  <p>{t.body}</p>
                </div>
              </div>
              <div className="cl-track">
                {tab === i && (
                  <div
                    className="cl-bar"
                    key={run + "-" + i}
                    style={{ animationDuration: t.ms + "ms" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
