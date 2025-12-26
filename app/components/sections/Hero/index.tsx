"use client";

import { HeroSection, HeroContainer } from "./styles";
import { HeroBackground, HeroContent, ScrollIndicator } from "./components";

export default function Hero() {
  return (
    <HeroSection id="hero">
      <HeroBackground />

      <HeroContainer>
        <HeroContent />
      </HeroContainer>

      <ScrollIndicator />
    </HeroSection>
  );
}
