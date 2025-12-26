import styled from "styled-components";
import { theme } from "@/app/styles/theme";
import { Section, H2, ButtonLink } from "@/app/components/ui";

export const CourseSection = styled(Section)`
  background-color: ${theme.colors.background.secondary};
  position: relative;
  overflow: hidden;
`;

export const CourseContainer = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: ${theme.spacing["3xl"]};
  align-items: center;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing["2xl"]};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: ${theme.spacing.xl};
  }
`;

export const ImageWrapper = styled.div<{ $isVisible: boolean }>`
  position: relative;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "-50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: ${theme.breakpoints.lg}) {
    order: 2;
    max-width: 100%;
    margin: 0 auto ${theme.spacing.xl};
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const ImageCard = styled.div<{ $aspectRatio?: string }>`
  position: relative;
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio || "4/5"};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  transition: transform ${theme.transitions.normal};

  &:nth-child(2) {
    margin-top: ${theme.spacing.xl};

    @media (max-width: ${theme.breakpoints.lg}) {
      display: none;
    }
  }

  &:hover {
    transform: scale(1.02);
    box-shadow: ${theme.shadows.xl};
  }

  img {
    object-fit: cover;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    max-width: 100%;
    aspect-ratio: 16/9;
  }
`;

export const ContentWrapper = styled.div<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateX(${({ $isVisible }) => ($isVisible ? "0" : "50px")});
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 0.2s;

  @media (max-width: ${theme.breakpoints.lg}) {
    order: 1;
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 ${theme.spacing.sm};
  }
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

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.xs};
  }
`;

export const Title = styled(H2)`
  margin-bottom: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize["2xl"]};
    margin-bottom: ${theme.spacing.md};
  }
`;

export const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.xl};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.medium};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

export const Description = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const FeaturesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.lg}) {
    align-items: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    align-items: flex-start;
    width: 100%;
  }
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
  width: 100%;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.sm};
    gap: ${theme.spacing.sm};
    align-items: center;
  }
`;

export const FeatureIcon = styled.span`
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

  @media (max-width: ${theme.breakpoints.sm}) {
    width: 24px;
    height: 24px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.lg}) {
    justify-content: center;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${theme.spacing.sm};
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

// Accordion Styles
export const AccordionWrapper = styled.div<{
  $isOpen: boolean;
  $height: number;
}>`
  max-height: ${({ $isOpen, $height }) => ($isOpen ? `${$height}px` : "0")};
  overflow: hidden;
  transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AccordionContent = styled.div`
  background: linear-gradient(
    180deg,
    ${theme.colors.background.primary} 0%,
    ${theme.colors.secondary.light} 100%
  );
`;

export const AccordionInner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: ${theme.spacing["4xl"]} ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing["3xl"]} ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing["2xl"]} ${theme.spacing.sm};
  }
`;

export const DetailsHero = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing["3xl"]};

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 0 auto ${theme.spacing["2xl"]};
  }
`;

export const DetailsTitle = styled.h2`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["4xl"]};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.lg};
  line-height: ${theme.typography.lineHeight.tight};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize["2xl"]};
  }
`;

export const DetailsTagline = styled.p`
  font-family: ${theme.typography.fontFamily.accent};
  font-size: ${theme.typography.fontSize["2xl"]};
  color: ${theme.colors.text.secondary};
  font-style: italic;
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.typography.fontSize.lg};
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing["3xl"]};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${theme.spacing["2xl"]};
  }
`;

export const ContentBlock = styled.div`
  &:first-child {
    padding-right: ${theme.spacing.xl};
    border-right: 1px solid ${theme.colors.secondary.dark};

    @media (max-width: ${theme.breakpoints.lg}) {
      padding-right: 0;
      border-right: none;
      border-bottom: 1px solid ${theme.colors.secondary.dark};
      padding-bottom: ${theme.spacing["2xl"]};
    }
  }
`;

export const BlockTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  position: relative;
  padding-left: ${theme.spacing.lg};

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 100%;
    background: ${theme.colors.primary.main};
  }
`;

export const BlockSubtitle = styled.h4`
  font-size: ${theme.typography.fontSize.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.primary.main};
  margin: ${theme.spacing.lg} 0 ${theme.spacing.md};
`;

export const BlockText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.md};
`;

export const BlockList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
`;

export const BlockListItem = styled.li`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  padding-left: ${theme.spacing.lg};
  position: relative;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: ${theme.colors.primary.main};
  }
`;

export const ImageShowcase = styled.div`
  margin: ${theme.spacing["3xl"]} 0;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: ${theme.spacing["2xl"]} 0;
  }
`;

export const ShowcaseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 400px);
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-rows: repeat(2, 300px);
    gap: ${theme.spacing.sm};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 300px);
    gap: ${theme.spacing.sm};
  }
`;

export const ShowcaseImage = styled.div<{ $position?: string }>`
  position: relative;
  border-radius: ${theme.borderRadius.md};
  overflow: hidden;
  width: 100%;
  height: 100%;

  img {
    object-fit: cover;
    object-position: ${({ $position }) => $position || "center"};
    transition: transform ${theme.transitions.slow};
  }

  &:hover img {
    transform: scale(1.02);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    border-radius: ${theme.borderRadius.sm};
  }
`;

export const ResultsSection = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing["2xl"]};
  margin: ${theme.spacing["3xl"]} 0;
  border-radius: ${theme.borderRadius.lg};
`;

export const ResultsTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.xl};
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ResultItem = styled.div`
  text-align: center;
`;

export const ResultIcon = styled.div`
  width: 48px;
  height: 48px;
  margin: 0 auto ${theme.spacing.sm};
  background: ${theme.colors.primary.main};
  color: ${theme.colors.white};
  border-radius: ${theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ResultText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.snug};
`;

export const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing["2xl"]};
  margin: ${theme.spacing["3xl"]} 0;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background: ${theme.colors.white};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.lg};
  border-left: 4px solid ${theme.colors.primary.main};
`;

export const InfoCardTitle = styled.h4`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

export const InfoCardText = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.relaxed};
  margin-bottom: ${theme.spacing.sm};
`;

export const CTASection = styled.div`
  background: ${theme.colors.primary.main};
  padding: ${theme.spacing["3xl"]};
  border-radius: ${theme.borderRadius.xl};
  text-align: center;
  margin-top: ${theme.spacing["3xl"]};

  @media (max-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing["2xl"]};
    margin-top: ${theme.spacing["2xl"]};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
    margin-top: ${theme.spacing.xl};
    border-radius: ${theme.borderRadius.lg};
  }
`;

export const CTATitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize["2xl"]};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.xl};
    margin-bottom: ${theme.spacing.sm};
  }
`;

export const CTAText = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.white};
  opacity: 0.9;
  margin-bottom: ${theme.spacing.xl};
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.sm};
    margin-bottom: ${theme.spacing.md};
  }
`;

export const CTAButton = styled(ButtonLink)`
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.white};
  font-size: ${theme.typography.fontSize.md};
  padding: ${theme.spacing.md} ${theme.spacing["2xl"]};

  &:hover {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary.main};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.typography.fontSize.sm};
    padding: ${theme.spacing.sm} ${theme.spacing.xl};
    width: 100%;
    max-width: 100%;
  }
`;
