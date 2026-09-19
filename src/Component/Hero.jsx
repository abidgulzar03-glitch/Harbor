import "./Hero.css";
import ScrollDemo from "./ScrollDemo";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-card">
        <div className="hero-content">
          <h1>
            All the work around
            <br />
            meetings, handled.
          </h1>

          <p className="top-p">
            From AI-powered scheduling to automated meeting recaps and
            follow-ups, get the busywork done with fewer tools and less effort.
          </p>

          <div className="hero-buttons">
            <button className="signup-btn">
              <span className="icon-badge">
                <svg viewBox="0 0 48 48" width="18" height="18">
                  <path
                    fill="#FFC107"
                    d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.1 29.6 4 24 4c-7.5 0-14 4.2-17.7 10.7z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.5 0 10.4-1.9 14.3-5.1l-6.6-5.6c-2 1.5-4.6 2.5-7.7 2.5-5.2 0-9.6-3.3-11.3-7.9l-6.6 5.1C9.9 39.7 16.4 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.6 5.6C41.5 36.4 44 30.8 44 24c0-1.3-.1-2.7-.4-3.5z"
                  />
                </svg>
              </span>
              Sign up with Google
            </button>

            <button className="signup-btn">
              <span className="icon-badge">
                <svg viewBox="0 0 23 23" width="18" height="18">
                  <rect x="1" y="1" width="10" height="10" fill="#F35325" />
                  <rect x="12" y="1" width="10" height="10" fill="#81BC06" />
                  <rect x="1" y="12" width="10" height="10" fill="#05A6F0" />
                  <rect x="12" y="12" width="10" height="10" fill="#FFBA08" />
                </svg>
              </span>
              Sign up with Microsoft
            </button>
          </div>

          <p className="hero-subfooter">
            <a href="/">Sign up with email</a>
            <span className="dot-hero">•</span>
            No credit card required
          </p>
        </div>
        <ScrollDemo />
      </div>
    </section>
  );
}
