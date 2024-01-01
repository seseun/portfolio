import { VStack } from "@chakra-ui/react";
import { useRef } from "react";

import Navigator from "./Navigator";
import SectionCareer from "./SectionCareer";
import SectionFinish from "./SectionFinish";
import SectionProfile from "./SectionProfile";
import SectionProject from "./SectionProject";
import SectionSkill from "./SectionSkill";

function Home() {
  const profileRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const finishRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    profile: profileRef,
    career: careerRef,
    skill: skillRef,
    project: projectRef,
    finish: finishRef,
  };

  return (
    <VStack align="stretch" spacing={20}>
      <Navigator sectionRefs={sectionRefs} />
      <SectionProfile ref={profileRef} />
      <SectionCareer ref={careerRef} />
      <SectionSkill ref={skillRef} />
      <SectionProject ref={projectRef} />
      <SectionFinish ref={finishRef} />
    </VStack>
  );
}
export default Home;
