import { Lock, XCircle } from "lucide-react";
import "./EmailLockSection.css";

export default function EmailLockSection() {
  return (
    <section className="email-lock-section">
      <div className="email-lock-container">
        {/* LEFT COPY */}
        <div className="email-lock-copy">
          <div className="email-lock-badge">
            <Lock className="email-lock-icon" />
            The Email Lock
          </div>

          <h2 className="email-lock-title">
            Sent where the registry says, <span>or not sent.</span>
          </h2>

          <p className="email-lock-primary-text">
            Rate cons, carrier confirmations, and dispatch sheets go only to the
            registered address. With none on file, the send is blocked.
          </p>

          <p className="email-lock-secondary-text">
            The moment a person can type a destination, the control is worth
            nothing — the fraud is a domain one character different.
          </p>
        </div>

        {/* RIGHT CONSOLE */}
        <div className="email-lock-console-wrapper">
          <div className="email-lock-console">
            {/* HEADER */}
            <div className="email-lock-console-header">
              <div className="email-lock-console-title">
                <span className="email-lock-status-dot"></span>

                <span>Carrier confirmation · send</span>
              </div>

              <span className="email-lock-reference">AR-0428</span>
            </div>

            {/* DATA */}
            <div className="email-lock-data">
              <div className="email-lock-row">
                <span>Carrier</span>

                <strong>REDLINE TRANSPORT INC</strong>
              </div>

              <div className="email-lock-row">
                <span>FMCSA email</span>

                <b className="email-lock-danger">NONE ON FILE</b>
              </div>

              <div className="email-lock-row">
                <span>Reply-to on the quote</span>

                <b className="email-lock-warning">DIFFERENT DOMAIN</b>
              </div>

              <div className="email-lock-row">
                <span>Manual address</span>

                <b className="email-lock-danger">NOT AVAILABLE</b>
              </div>
            </div>

            {/* ALERT */}
            <div className="email-lock-alert">
              <div className="email-lock-alert-title">
                <XCircle />
                SEND BLOCKED
              </div>

              <p>There is no override on this control, for any role.</p>
            </div>

            {/* FOOTER */}
            <div className="email-lock-console-footer">
              No registered address means no send
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
