import "./TheLoop.css";
import HeroTheLoop from "./HeroTheLoop";
import ProblemSectionTheLoop from "./ProblemSectionTheLoop";
import HowItWorksTheLoop from "./HowItWorksTheLoop";
import PlatformSectionTheLoop from "./PlatformSectionTheLoop";
import ModuleShowcaseTheLoop from "./ModuleShowcaseTheLoop";
import DemoExperienceTheLoop from "./DemoExperienceTheLoop";

function TheLoop() {
  return (
    <div className="the-loop">
      <HeroTheLoop />
      <ProblemSectionTheLoop />
      <HowItWorksTheLoop />
      <PlatformSectionTheLoop />
      <ModuleShowcaseTheLoop />
      <DemoExperienceTheLoop />
    </div>
  );
}

export default TheLoop;
