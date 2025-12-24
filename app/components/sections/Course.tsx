"use client";

import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/app/styles/theme";
import { Container, Section, H2, ButtonLink } from "@/app/components/ui";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { useTranslations } from "@/app/i18n";
import { CheckIcon } from "@/app/images/icons";

const CourseSection = styled(Section)`
  background-color: ${theme.colors.background.secondary};
  position: relative;
  overflow: hidden;
`;

const CourseContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
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
    order: 2;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
`;

const ImageCard = styled.div<{ $aspectRatio?: string }>`
  position: relative;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || "4/5"};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: transform ${theme.transitions.normal};

  &:nth-child(2) {
    margin-top: ${theme.spacing.xl};
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: ${theme.shadows.xl};
  }

  img {
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;

  @media (max-width: ${theme.breakpoints.lg}) {
    order: 1;
    text-align: center;
  }
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

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.md};
`;

const Description = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.xl};
`;

const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    align-items: center;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
`;

const FeatureIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.full};
  flex-shrink: 0;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export default function Course() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>();
  const t = useTranslations();

  return (
    <CourseSection id="course" ref={sectionRef}>
      <CourseContainer>
        <ImageWrapper $isVisible={isVisible}>
          <ImageGrid>
            <ImageCard>
              <Image
                src="https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80"
                alt={t.course.image1Alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </ImageCard>
            <ImageCard $aspectRatio="3/4">
              <Image
                src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80"
                alt={t.course.image2Alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </ImageCard>
          </ImageGrid>
        </ImageWrapper>

        <ContentWrapper $isVisible={isVisible}>
          <SectionLabel>{t.course.label}</SectionLabel>
          <Title>{t.course.title}</Title>
          <Subtitle>{t.course.subtitle}</Subtitle>
          <Description>{t.course.description}</Description>

          <FeaturesList>
            {t.course.features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>
                  <CheckIcon />
                </FeatureIcon>
                {feature}
              </FeatureItem>
            ))}
          </FeaturesList>

          <ButtonWrapper>
            <ButtonLink href="#register" $variant="primary" $size="lg">
              {t.course.registerBtn}
            </ButtonLink>
            <ButtonLink href="#details" $variant="outline" $size="lg">
              {t.course.detailsBtn}
            </ButtonLink>
          </ButtonWrapper>
        </ContentWrapper>
      </CourseContainer>
    </CourseSection>
  );
}
