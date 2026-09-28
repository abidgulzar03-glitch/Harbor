import "./TwoClockSide.css";

export default function TwoClockside() {
  return (
    <div className="twoClockSide-wrap">
      <div className="twoClockSide-inner">
        <span className="twoClockSide-badge">
          <span className="twoClockSide-dot" />
          Two clocks
        </span>

        <div className="twoClockSide-hero">
          <h1>Neither of them lives in a browser tab</h1>
          <p className="twoClockSide-lede">
            Both are jobs on the server. Closing the tab does not cancel them,
            and a deploy in the middle does not either.
          </p>
        </div>

        <div className="twoClockSide-panels">
          <div className="twoClockSide-panel">
            <div className="twoClockSide-dial-row">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                aria-hidden="true"
              >
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="var(--twoClockSide-panel-line)"
                  strokeWidth="5"
                />
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="var(--twoClockSide-amber)"
                  strokeWidth="5"
                  strokeDasharray="188.5"
                  strokeDashoffset="153.7"
                  strokeLinecap="round"
                  transform="rotate(-90 36 36)"
                />
                <text
                  x="36"
                  y="41"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="17"
                  fontWeight="600"
                  fill="var(--twoClockSide-ink)"
                >
                  15m
                </text>
              </svg>
              <div className="twoClockSide-dial-text">
                <span className="twoClockSide-unit">MINUTES</span>
                <span className="twoClockSide-title">
                  Minutes, then somebody is told
                </span>
                <span className="twoClockSide-sub">
                  After a carrier is created and left pending
                </span>
              </div>
            </div>
            <p>
              Create it now, approve it later, dispatch in between is how a gate
              gets worked around. Still pending after fifteen minutes, and
              compliance is told. It unblocks nothing — dispatch still refuses.
            </p>
          </div>

          <div className="twoClockSide-panel">
            <div className="twoClockSide-dial-row">
              <svg
                width="72"
                height="72"
                viewBox="0 0 72 72"
                aria-hidden="true"
              >
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="var(--twoClockSide-panel-line)"
                  strokeWidth="5"
                />
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="var(--twoClockSide-amber)"
                  strokeWidth="5"
                  strokeDasharray="188.5"
                  strokeDashoffset="47.1"
                  strokeLinecap="round"
                  transform="rotate(-90 36 36)"
                />
                <text
                  x="36"
                  y="41"
                  textAnchor="middle"
                  fontFamily="IBM Plex Mono, monospace"
                  fontSize="17"
                  fontWeight="600"
                  fill="var(--twoClockSide-ink)"
                >
                  30d
                </text>
              </svg>
              <div className="twoClockSide-dial-text">
                <span className="twoClockSide-unit">DAYS</span>
                <span className="twoClockSide-title">
                  Days, then the check is stale
                </span>
                <span className="twoClockSide-sub">
                  Verification carries its date and its source
                </span>
              </div>
            </div>
            <p>
              Authority gets revoked on ordinary Tuesdays. Past thirty days the
              carrier reads stale everywhere it appears — in colour and in word.
            </p>
            <span className="twoClockSide-tag">Stale check</span>
          </div>
        </div>

        <div className="twoClockSide-foot">
          <p>
            Nothing auto-rejects a carrier. A report that cried fraud at every
            new small fleet would be ignored inside a week — including the once
            it mattered.
          </p>
          <a href="#">
            The carrier risk report
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 7h8M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
