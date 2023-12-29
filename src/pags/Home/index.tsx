import { VStack } from "@chakra-ui/react";
import { useRef } from "react";

import Career from "./Career";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";
import SectionNav from "./SectionNav";

function Home() {
  const profileRef = useRef<HTMLDivElement>(null);
  const careerRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    profile: profileRef,
    career: careerRef,
    skill: skillRef,
    project: projectRef,
  };

  return (
    <VStack align="stretch" spacing={16}>
      <SectionNav sectionRefs={sectionRefs} />
      <Profile ref={profileRef} />
      <Career ref={careerRef} />
      <Skill ref={skillRef} />
      <Project ref={projectRef} />
    </VStack>
  );
}
export default Home;
