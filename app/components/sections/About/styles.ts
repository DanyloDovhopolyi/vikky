import styled from "styled-components";
import { theme } from "@/app/styles/theme";
import { Section, H2, Paragraph, Lead } from "@/app/components/ui";

export const AboutSection = styled(Section)`
  background-color: ${theme.colors.background.secondary};
  position: relative;
  overflow: hidden;
`;

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: ${theme.spacing["3xl"]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing["2xl"]};
  }
`;

export const ImageWrapper = styled.div<{ $isVisible: boolean }>`
  position: relative;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "-50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const MainImage = styled.div`
  position: relative;
  aspect-ratio: 4/5;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.xl};

  img {
    object-fit: cover;
  }
`;

export const FloatingAccent = styled.div`
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

export const ContentWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;
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

export const LeadText = styled(Lead)`
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.text.secondary};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

export const DescParagraph = styled(Paragraph)`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  white-space: pre-line;
`;

export const Signature = styled.div`
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.xl};
  border-top: 1px solid ${theme.colors.secondary.dark};
`;

export const SignatureText = styled.span`
  font-family: ${theme.typography.fontFamily.accent};
  font-size: ${theme.typography.fontSize.xl};
  font-style: italic;
  color: ${theme.colors.primary.main};
`;
