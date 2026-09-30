import "./HowItWorksTheLoop.css";
import CircularCarousel from "../../../ReadyMadeComponents/CircularCarousel";

export default function HowItWorksTheLoop() {
  return (
    <>
      {/* The carousel fills its parent, so the parent must have a height */}
      <section
        style={{
          width: "100%",
          height: "640px",
          background: "#000",
          color: "#fff",
          position: "relative",
        }}
      >
        <CircularCarousel
          preset="cylinder"
          intro="rise"
          autoplay="drift"
          captions
        />
      </section>
    </>
  );
}
