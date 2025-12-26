"use client";

import { useState } from "react";
import { Container } from "@/app/components/ui";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { CourseSection, CourseContainer } from "./styles";
import { CoursePreview, CourseDetails } from "./components";

export default function Course() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <CourseSection id="course" ref={sectionRef}>
        <Container>
          <CourseContainer>
            <CoursePreview
              isVisible={isVisible}
              isOpen={isOpen}
              onToggle={toggleAccordion}
            />
          </CourseContainer>
        </Container>
      </CourseSection>

      <CourseDetails isOpen={isOpen} />
    </>
  );
}
