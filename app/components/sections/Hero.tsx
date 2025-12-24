"use client";

import { useCallback } from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { theme } from "@/app/styles/theme";
import { Container, ButtonLink } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroSection = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;

  img {
    object-fit: cover;
    object-position: center;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      ${theme.colors.primary.main} 0%,
      ${theme.colors.primary.main} 20%,
      rgba(61, 24, 35, 0.85) 35%,
      rgba(92, 36, 52, 0.4) 50%,
      rgba(92, 36, 52, 0.15) 65%,
      transparent 80%
    );
  }
`;

const HeroContainer = styled(Container)`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing["3xl"]};
  align-items: center;
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: ${theme.spacing["3xl"]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 0 auto;
  }
`;

const HeroTitle = styled.h1`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: clamp(2.5rem, 5vw, ${theme.typography.fontSize["5xl"]});
  font-weight: ${theme.typography.fontWeight.semibold};
  line-height: ${theme.typography.lineHeight.tight};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.2s;
`;

const HeroSubtitle = styled.p`
  font-family: ${theme.typography.fontFamily.body};
  font-size: ${theme.typography.fontSize.md};
  line-height: ${theme.typography.lineHeight.relaxed};
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: ${theme.spacing.xl};
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.4s;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 0.6s;

  @media (max-width: ${theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

const PrimaryButton = styled(ButtonLink)`
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.primary.main};
  border-color: ${theme.colors.secondary.main};

  &:hover {
    background-color: ${theme.colors.white};
    border-color: ${theme.colors.white};
  }
`;

const OutlineButton = styled(ButtonLink)`
  background-color: transparent;
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary.main};
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${theme.spacing.xl};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${theme.spacing.sm};
  color: ${theme.colors.white};
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease forwards;
  animation-delay: 1s;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const ScrollText = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.widest};
`;

const scrollBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
`;

const ScrollIcon = styled.div`
  width: 24px;
  height: 40px;
  border: 2px solid ${theme.colors.white};
  border-radius: 12px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 8px;
    background-color: ${theme.colors.white};
    border-radius: 2px;
    animation: ${scrollBounce} 1.5s ease-in-out infinite;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

const FloatingShape = styled.div<{
  $delay: string;
  $size: string;
  $top: string;
  $left: string;
}>`
  position: absolute;
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    transparent 70%
  );
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

export default function Hero() {
  const t = useTranslations();

  const scrollToContent = useCallback(() => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <HeroSection id="hero">
      <BackgroundImage>
        <Image
          src="/images/hero.png"
          alt="Vikky-Doch - Ukrainian fashion brand"
          fill
          priority
        />
      </BackgroundImage>

      <FloatingElements>
        <FloatingShape $delay="0s" $size="300px" $top="10%" $left="60%" />
        <FloatingShape $delay="2s" $size="200px" $top="60%" $left="80%" />
        <FloatingShape $delay="4s" $size="150px" $top="30%" $left="85%" />
      </FloatingElements>

      <HeroContainer>
        <HeroContent>
          <HeroTitle>
            {t.hero.title}
            <br />
            {t.hero.titleLine2}
          </HeroTitle>
          <HeroSubtitle>{t.hero.subtitle}</HeroSubtitle>
          <HeroButtons>
            <PrimaryButton href="#collections" $size="lg">
              {t.hero.catalogBtn}
            </PrimaryButton>
            <OutlineButton href="#about" $size="lg" $variant="outline">
              {t.hero.aboutBtn}
            </OutlineButton>
          </HeroButtons>
        </HeroContent>
      </HeroContainer>

      <ScrollIndicator onClick={scrollToContent}>
        <ScrollText>{t.common.scrollDown}</ScrollText>
        <ScrollIcon />
      </ScrollIndicator>
    </HeroSection>
  );
}
