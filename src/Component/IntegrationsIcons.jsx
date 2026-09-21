import "./IntegrationsIcons.css";
import {
  FaChrome,
  FaGoogle,
  FaSlack,
  FaSalesforce,
  FaLinkedin,
  FaStripe,
  FaPaypal,
  FaMicrosoft,
} from "react-icons/fa6";
import { CalendarDays, Mail, Video, Bot, BookOpen } from "lucide-react";

const row1 = [
  { icon: <Video />, color: "#2D8CFF" },
  { icon: <CalendarDays />, color: "#4285F4" },
  { icon: <Mail />, color: "#EA4335" },
  { icon: <FaGoogle />, color: "#34A853" },
  { icon: <FaSalesforce />, color: "#00A1E0" },
  { icon: <FaSlack />, color: "#E01E5A" },
  { icon: <FaMicrosoft />, color: "#6264A7" },
  { icon: <FaMicrosoft />, color: "#0078D4" },
];

const row2 = [
  { icon: <FaChrome />, color: "#4285F4" },
  { icon: <Bot />, color: "#111827" },
  { icon: <FaSalesforce />, color: "#D97745" },
  { icon: <FaSalesforce />, color: "#F97316" },
  { icon: <BookOpen />, color: "#0F8A5F" },
  { icon: <FaLinkedin />, color: "#0A66C2" },
  { icon: <FaStripe />, color: "#635BFF" },
  { icon: <FaPaypal />, color: "#003087" },
];

function Card({ icon, color }) {
  return (
    <div className="int-card" style={{ "--brand": color }}>
      <div className="int-icon" style={{ color }}>
        {icon}
      </div>
    </div>
  );
}

export default function IntegrationsIcons() {
  return (
    <section className="integrations-icons">
      {/* Row 1 */}
      <div className="row-grid">
        {row1.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>

      {/* Row 2 */}
      <div className="row-grid second">
        {row2.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>

      {/* Bottom Center Card */}
      <div className="bottom-wrap">
        <div className="bottom-card" style={{ "--brand": "#F97316" }}>
          <BookOpen className="bottom-icon" />
        </div>
      </div>

      {/* Bottom Integration Cards */}
      <div className="integration-bottom">
        {/* Google */}
        <div className="suite-card google">
          <div className="suite-top">
            <FaGoogle className="suite-logo google-logo" />
            <div className="suite-arrow">↗</div>
          </div>

          <h3>Google suite</h3>

          <p>
            Get your job done faster by connecting Calendly to Google Calendar,
            Meet, Analytics, and more.
          </p>
        </div>

        {/* Microsoft */}
        <div className="suite-card microsoft">
          <div className="suite-top">
            <FaMicrosoft className="suite-logo microsoft-logo" />
            <div className="suite-arrow">↗</div>
          </div>

          <h3>Microsoft suite</h3>

          <p>
            Make your day easier with Calendly integrations for Microsoft Teams,
            Outlook, Azure SSO, and more.
          </p>
        </div>
      </div>
    </section>
  );
}
