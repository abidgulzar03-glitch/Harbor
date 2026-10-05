import "./TheLoop.css";
import HeroTheLoop from "./HeroTheLoop";
import ProblemSectionTheLoop from "./ProblemSectionTheLoop";
import HowItWorksTheLoop from "./HowItWorksTheLoop";
import PlatformSectionTheLoops from "./PlatformSectionTheLoops";
import ModuleShowcaseTheLoops from "./ModuleShowcaseTheLoops";

import BookDemoNew from "../../../Component/BoookDemoNew";

function TheLoop() {
  return (
    <div className="the-loop">
      <HeroTheLoop />
      <ProblemSectionTheLoop />
      <HowItWorksTheLoop />
      <PlatformSectionTheLoops />
      <ModuleShowcaseTheLoops />

      <BookDemoNew />
    </div>
  );
}

export default TheLoop;
