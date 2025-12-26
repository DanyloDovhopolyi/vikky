import styled from "styled-components";
import { theme } from "@/app/styles/theme";
import { Section, H2 } from "@/app/components/ui";

export const CollectionsSection = styled(Section)`
  background-color: ${theme.colors.primary.main};
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(
      to bottom,
      ${theme.colors.background.primary},
      transparent
    );
    pointer-events: none;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${theme.spacing["3xl"]};
  position: relative;
  z-index: 1;
`;

export const SectionLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  letter-spacing: ${theme.typography.letterSpacing.wide};
  color: ${theme.colors.accent.main};
  margin-bottom: ${theme.spacing.md};

  &::before {
    content: "—";
    color: ${theme.colors.accent.main};
  }
`;

export const Title = styled(H2)`
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
`;

export const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: rgba(255, 255, 255, 0.8);
  line-height: ${theme.typography.lineHeight.relaxed};
`;

export const CollectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const CollectionCard = styled.article<{
  $isVisible: boolean;
  $index: number;
}>`
  position: relative;
  cursor: pointer;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "40px")});
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({ $index }) => $index * 0.1}s;
`;

export const CardImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.lg};

  img {
    object-fit: cover;
    transition: transform ${theme.transitions.slower};
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, transparent 50%);
    opacity: 0.8;
    transition: opacity ${theme.transitions.normal};
  }

  ${CollectionCard}:hover & {
    img {
      transform: scale(1.08);
    }

    &::after {
      opacity: 1;
    }
  }
`;

export const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.xl};
  text-align: center;
  z-index: 1;
  transform: translateY(10px);
  transition: transform ${theme.transitions.normal};

  ${CollectionCard}:hover & {
    transform: translateY(0);
  }
`;

export const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.xs};
`;

export const CardSubtitle = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.7);
`;

export const CTAWrapper = styled.div`
  text-align: center;
  margin-top: ${theme.spacing["3xl"]};
`;
