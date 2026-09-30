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

import TheLoop from "./Pages/Platform/Platform/TheLoop";
import Compliance from "./Pages/Platform/Compliance-Page/Compliance";
import Operations from "./Pages/Platform/Operations-page/Operations";
import Portals from "./Pages/Platform/Portals/Portals";
import Finance from "./Pages/Platform/Finance-page/Finance";
import Reports from "./Pages/Platform/Reports-page/Reports";

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

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/the-loops" element={<TheLoop />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/portals" element={<Portals />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
