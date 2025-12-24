"use client";

import { useMemo, ReactNode } from "react";
import styled from "styled-components";
import { theme } from "@/app/styles/theme";
import { Container, Section, H2, Grid } from "@/app/components/ui";
import { useStaggeredReveal } from "@/app/hooks/useScrollReveal";
import { useTranslations } from "@/app/i18n";
import { UserIcon, SparkleIcon, HeartIcon, SunIcon } from "@/app/images/icons";

const PhilosophySection = styled(Section)`
  background-color: ${theme.colors.background.primary};
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${theme.spacing["3xl"]};
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
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const PhilosophyGrid = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const PhilosophyCard = styled.article<{ $isVisible: boolean; $index: number }>`
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.sm};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "30px")});
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({ $index }) => $index * 0.1}s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const IconWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.secondary.main};
  border-radius: ${theme.borderRadius.full};
  color: ${theme.colors.primary.main};
  transition: all ${theme.transitions.normal};

  ${PhilosophyCard}:hover & {
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white};
    transform: scale(1.1);
  }

  svg {
    width: 36px;
    height: 36px;
  }
`;

const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const CardDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const icons: ReactNode[] = [
  <UserIcon key="1" />,
  <SparkleIcon key="2" />,
  <HeartIcon key="3" />,
  <SunIcon key="4" />,
];

export default function Philosophy() {
  const t = useTranslations();

  const philosophyItems = useMemo(
    () =>
      t.philosophy.items.map((item, index) => ({
        id: index + 1,
        title: item.title,
        description: item.description,
        icon: icons[index],
      })),
    [t.philosophy.items]
  );

  const { containerRef, visibleItems } = useStaggeredReveal(
    philosophyItems.length,
    150
  );

  return (
    <PhilosophySection id="philosophy">
      <Container>
        <SectionHeader>
          <SectionLabel>{t.philosophy.label}</SectionLabel>
          <Title>{t.philosophy.title}</Title>
          <Subtitle>{t.philosophy.subtitle}</Subtitle>
        </SectionHeader>

        <PhilosophyGrid ref={containerRef}>
          {philosophyItems.map((item, index) => (
            <PhilosophyCard
              key={item.id}
              $isVisible={visibleItems[index]}
              $index={index}
            >
              <IconWrapper>{item.icon}</IconWrapper>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </PhilosophyCard>
          ))}
        </PhilosophyGrid>
      </Container>
    </PhilosophySection>
  );
}
