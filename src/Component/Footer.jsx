import "./Footer.css";

const Footer = () => {
  return (
    <footer className="calendly-footer">
      <div className="footer-top">
        {/* Left slogan + logo */}
        <div className="footer-left">
          <p className="slogan">
            Software for ocean drayage brokerages. Containers, the charges they
            attract, and the carriers that move them.
          </p>

          <div className="logo">
            <span className="logo-icon">H</span>
            <span className="logo-text">Harbor TMS</span>
          </div>

          {/* Footer Buttons */}
          <div className="footer-buttons">
            <a href="#demo" className="footer-btn demo-btn">
              Book a Demo
            </a>

            <a href="/login" className="footer-btn login-btn-2">
              Login
            </a>
          </div>
        </div>

        {/* Link columns */}
        <div className="footer-links">
          <div className="link-column">
            <h4>Product</h4>
            <ul>
              <li>
                <a href="/platform/loop">The loop</a>
              </li>
              <li>
                <a href="/platform/operations">Operations</a>
              </li>
              <li>
                <a href="/platform/compliance">Compliance</a>
              </li>
              <li>
                <a href="/platform/finance">Finance</a>
              </li>
              <li>
                <a href="/platform/portals">Portals</a>
              </li>
              <li>
                <a href="/platform/reports">Reports</a>
              </li>
              <li>
                <a href="#integrations">Integrations</a>
              </li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#why">Why Harbor</a>
              </li>
              <li>
                <a href="#security">Security</a>
              </li>
              <li>
                <a href="#resources">Resources</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>

          <div className="link-column">
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
              <li>
                <a href="#dpa">DPA</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <div className="bottom-left">
          HARBOR TMS LLC &middot; MC# 1800965 &middot; DOT# 4539058 &middot;
          DALLAS, TX
        </div>

        <div className="bottom-links">
          <a href="mailto:sales@harbortmss.com" className="brand-email">
            sales@harbortmss.com
          </a>
        </div>

        <div className="copyright">© Copyright Harbor TMS 2026</div>
      </div>
    </footer>
  );
};

export default Footer;
