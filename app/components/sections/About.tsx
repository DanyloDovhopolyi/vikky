"use client";

import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/app/styles/theme";
import { Container, Section, H2, Paragraph, Lead } from "@/app/components/ui";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useTranslations } from "@/app/i18n";

const AboutSection = styled(Section)`
  background-color: ${theme.colors.background.secondary};
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: ${theme.spacing["3xl"]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing["2xl"]};
  }
`;

const ImageWrapper = styled.div<{ $isVisible: boolean }>`
  position: relative;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "-50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const MainImage = styled.div`
  position: relative;
  aspect-ratio: 4/5;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.xl};

  img {
    object-fit: cover;
  }
`;

const FloatingAccent = styled.div`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 150px;
  height: 150px;
  background-color: ${theme.colors.primary.main};
  border-radius: ${theme.borderRadius.lg};
  z-index: -1;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 100px;
    height: 100px;
    bottom: -10px;
    right: -10px;
  }
`;

const ContentWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
`;

const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.md};

  &::before {
    content: "—";
    color: ${theme.colors.primary.main};
  }
`;

const Title = styled(H2)`
  margin-bottom: ${theme.spacing.lg};
`;

const LeadText = styled(Lead)`
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const DescParagraph = styled(Paragraph)`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const Signature = styled.div`
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.secondary.dark};
`;

const SignatureText = styled.span`
  font-family: ${theme.typography.fontFamily.accent};
  font-size: ${theme.typography.fontSize.xl};
  font-style: italic;
  color: ${theme.colors.primary.main};
`;

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const t = useTranslations();

  return (
    <AboutSection id="about" ref={sectionRef}>
      <AboutContainer>
        <ImageWrapper $isVisible={isVisible}>
          <MainImage>
            <Image
              src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&q=80"
              alt={t.about.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </MainImage>
          <FloatingAccent />
        </ImageWrapper>

        <ContentWrapper $isVisible={isVisible}>
          <SectionLabel>{t.about.label}</SectionLabel>
          <Title>{t.about.title}</Title>
          <LeadText>{t.about.lead}</LeadText>

          <Description>
            <DescParagraph>{t.about.p1}</DescParagraph>
            <DescParagraph>{t.about.p2}</DescParagraph>
            <DescParagraph>{t.about.p3}</DescParagraph>
          </Description>

          <Signature>
            <SignatureText>{t.about.signature}</SignatureText>
          </Signature>
        </ContentWrapper>
      </AboutContainer>
    </AboutSection>
  );
}
