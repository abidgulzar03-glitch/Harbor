import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import StepsSection from "./Component/StepsSection";
import CalendlyFeatureScroll from "./Component/CalendlyFeatureScroll";
import CallieAnimation from "./Component/CallieAnimation";
import NotetakerShowcase from "./Component/NotetakerShowcase";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StepsSection />
      <CalendlyFeatureScroll />
      <CallieAnimation />
      <NotetakerShowcase />
    </>
  );
}

export default App;
