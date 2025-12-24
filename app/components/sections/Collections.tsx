"use client";

import { useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/app/styles/theme";
import { Container, Section, H2, ButtonLink } from "@/app/components/ui";
import { useStaggeredReveal } from "@/app/hooks/useScrollReveal";
import { useTranslations } from "@/app/i18n";

const CollectionsSection = styled(Section)`
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

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto ${theme.spacing["3xl"]};
  position: relative;
  z-index: 1;
`;

const SectionLabel = styled.span`
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

const Title = styled(H2)`
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.lg};
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.md};
  color: rgba(255, 255, 255, 0.8);
  line-height: ${theme.typography.lineHeight.relaxed};
`;

const CollectionGrid = styled.div`
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

const CollectionCard = styled.article<{ $isVisible: boolean; $index: number }>`
  position: relative;
  cursor: pointer;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: translateY(${({ $isVisible }) => ($isVisible ? "0" : "40px")});
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({ $index }) => $index * 0.1}s;
`;

const CardImageWrapper = styled.div`
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

const CardContent = styled.div`
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

const CardTitle = styled.h3`
  font-family: ${theme.typography.fontFamily.heading};
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.white};
  margin-bottom: ${theme.spacing.xs};
`;

const CardSubtitle = styled.span`
  font-size: ${theme.typography.fontSize.sm};
  color: rgba(255, 255, 255, 0.7);
`;

const ViewButton = styled.span`
  display: inline-block;
  margin-top: ${theme.spacing.md};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  background-color: ${theme.colors.white};
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.wide};
  border-radius: ${theme.borderRadius.sm};
  opacity: 0;
  transform: translateY(10px);
  transition: all ${theme.transitions.normal};

  ${CollectionCard}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: ${theme.spacing["3xl"]};
`;

const collectionImages = [
  "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80",
  "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80",
  "https://images.unsplash.com/photo-1594552072238-5c4a29db4cb2?w=600&q=80",
  "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=600&q=80",
];

export default function Collections() {
  const t = useTranslations();

  const collections = useMemo(
    () =>
      t.collections.items.map((item, index) => ({
        id: index + 1,
        title: item.title,
        subtitle: item.subtitle,
        image: collectionImages[index],
      })),
    [t.collections.items]
  );

  const { containerRef, visibleItems } = useStaggeredReveal(
    collections.length,
    150
  );

  return (
    <CollectionsSection id="collections">
      <Container>
        <SectionHeader>
          <SectionLabel>{t.collections.label}</SectionLabel>
          <Title>{t.collections.title}</Title>
          <Subtitle>{t.collections.subtitle}</Subtitle>
        </SectionHeader>

        <CollectionGrid ref={containerRef}>
          {collections.map((collection, index) => (
            <CollectionCard
              key={collection.id}
              $isVisible={visibleItems[index]}
              $index={index}
            >
              <CardImageWrapper>
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                />
              </CardImageWrapper>
              <CardContent>
                <CardTitle>{collection.title}</CardTitle>
                <CardSubtitle>{collection.subtitle}</CardSubtitle>
                <ViewButton>{t.collections.viewBtn}</ViewButton>
              </CardContent>
            </CollectionCard>
          ))}
        </CollectionGrid>

        <CTAWrapper>
          <ButtonLink href="#catalog" $variant="secondary" $size="lg">
            {t.collections.viewAllBtn}
          </ButtonLink>
        </CTAWrapper>
      </Container>
    </CollectionsSection>
  );
}
