import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import StepsSection from "./Component/StepsSection";
import CalendlyFeatureScroll from "./Component/CalendlyFeatureScroll";
import CallieAnimation from "./Component/CallieAnimation";
import NotetakerShowcase from "./Component/NotetakerShowcase";
import PaymentsShowcase from "./Component/PaymentsShowcase";
import CustomerStories from "./Component/CustomerStories";
import IntegrationsSection from "./Component/IntegrationsSection";
import IntegrationsIcons from "./Component/IntegrationsIcons";
import CTASection from "./Component/CTASection";
import Footer from "./Component/Footer";

import TheLoop from "./Pages/Platform/TheLoop";
import Compliance from "./Pages/Platform/Compliance-Page/Compliance";
import Portals from "./Pages/Platform/Portals/Portals";

function Home() {
  return (
    <>
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

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* The Loops */}
          <Route path="/the-loops" element={<TheLoop />} />

          {/* Compliance */}
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/portals" element={<Portals />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
