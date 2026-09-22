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

// import TheLoop from "./Pages/Patform/TheLoop";

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
          {/* <Route path="/the-loops" element={<TheLoop />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
