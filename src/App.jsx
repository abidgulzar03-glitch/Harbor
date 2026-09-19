import "./App.css";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import StepsSection from "./Component/StepsSection";
import CalendlyFeatureScroll from "./Component/CalendlyFeatureScroll";
import CallieAnimation from "./Component/CallieAnimation";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <StepsSection />

      <CalendlyFeatureScroll />
      <CallieAnimation />
    </>
  );
}

export default App;
