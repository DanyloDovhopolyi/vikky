import { useRef, useEffect, useState } from "react";
import { AccordionWrapper, AccordionContent, AccordionInner } from "../styles";
import { DetailsHeroSection } from "./DetailsHeroSection";
import { ImageShowcaseSection } from "./ImageShowcaseSection";
import { LearningContent } from "./LearningContent";
import { ResultsSection } from "./ResultsSection";
import { FormatAndAtmosphere } from "./FormatAndAtmosphere";
import { CTASection } from "./CTASection";

type CourseDetailsProps = {
  isOpen: boolean;
};

export function CourseDetails({ isOpen }: CourseDetailsProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const accordion = document.getElementById("course-details");
        if (accordion) {
          accordion.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [isOpen]);

  return (
    <AccordionWrapper
      $isOpen={isOpen}
      $height={contentHeight}
      id="course-details"
    >
      <AccordionContent ref={contentRef}>
        <AccordionInner>
          <DetailsHeroSection />
          <ImageShowcaseSection />
          <LearningContent />
          <ResultsSection />
          <FormatAndAtmosphere />
          <CTASection />
        </AccordionInner>
      </AccordionContent>
    </AccordionWrapper>
  );
}
