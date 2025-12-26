"use client";

import { Container } from "@/app/components/ui";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { AboutSection, AboutContainer } from "./styles";
import { AboutImage, AboutContent } from "./components";

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <AboutSection id="about" ref={sectionRef}>
      <Container>
        <AboutContainer>
          <AboutImage isVisible={isVisible} />
          <AboutContent isVisible={isVisible} />
        </AboutContainer>
      </Container>
    </AboutSection>
  );
}
