import { VStack } from "@chakra-ui/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import Navigator from "./Navigator";
import SectionCareer from "./SectionCareer";
import SectionFinish from "./SectionFinish";
import SectionProfile from "./SectionProfile";
import SectionProject from "./SectionProject";
import SectionSkill from "./SectionSkill";

function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
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
  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>(
        "section:not(:first-of-type)",
      );
      gsap.set(sections, {
        x: -32,
        opacity: 0,
      });
      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          animation: gsap.to(section, {
            x: 0,
            opacity: 1,
          }),
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <VStack align="stretch" spacing={20} ref={containerRef}>
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
