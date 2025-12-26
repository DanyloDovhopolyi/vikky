import styled from "styled-components";
import { theme } from "@/app/styles/theme";
import { Section, H2, Grid } from "@/app/components/ui";

export const PhilosophySection = styled(Section)`
  background-color: ${theme.colors.background.primary};
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${theme.spacing["3xl"]};
`;

export const SectionLabel = styled.span`
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

export const Title = styled(H2)`
  margin-bottom: ${theme.spacing.lg};
`;

export const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;

export const PhilosophyGridWrapper = styled(Grid)`
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const PhilosophyCard = styled.article<{
  $isVisible: boolean;
  $index: number;
}>`
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

export const IconWrapper = styled.div`
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

export const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

export const CardDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
`;
