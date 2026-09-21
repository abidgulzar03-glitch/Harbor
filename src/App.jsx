import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import StepsSection from "./Component/StepsSection";
import CalendlyFeatureScroll from "./Component/CalendlyFeatureScroll";
import CallieAnimation from "./Component/CallieAnimation";
import NotetakerShowcase from "./Component/NotetakerShowcase";
import PaymentsShowcase from "./Component/PaymentsShowcase.";
import CustomerStories from "./Component/CustomerStories";
import IntegrationsSection from "./Component/IntegrationsSection";
import IntegrationsIcons from "./Component/IntegrationsIcons";
import CTASection from "./Component/CTASection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StepsSection />
      <CalendlyFeatureScroll />
      <CallieAnimation />
      <NotetakerShowcase />
      <PaymentsShowcase />
      <CustomerStories />
      <IntegrationsSection />
      <IntegrationsIcons />
      <CTASection />
    </>
  );
}

export default App;
