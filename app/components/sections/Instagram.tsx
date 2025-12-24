"use client";

import { useMemo } from "react";
import styled from "styled-components";
import Image from "next/image";
import { theme } from "@/app/styles/theme";
import { Container, Section, H2, ButtonLink } from "@/app/components/ui";
import { useStaggeredReveal } from "@/app/hooks/useScrollReveal";
import { useTranslations } from "@/app/i18n";
import { InstagramIcon } from "@/app/images/icons";

const InstagramSection = styled(Section)`
  background-color: ${theme.colors.background.primary};
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto ${theme.spacing["2xl"]};
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
  margin-bottom: ${theme.spacing.md};
`;

const Handle = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.md};
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.medium};
  transition: all ${theme.transitions.fast};

  &:hover {
    color: ${theme.colors.primary.dark};
    transform: translateY(-2px);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.xl}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const InstagramPost = styled.a<{ $isVisible: boolean; $index: number }>`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  cursor: pointer;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transform: scale(${({ $isVisible }) => ($isVisible ? 1 : 0.9)});
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${({ $index }) => $index * 0.05}s;

  img {
    object-fit: cover;
    transition: transform ${theme.transitions.slow};
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${theme.colors.overlay};
    opacity: 0;
    transition: opacity ${theme.transitions.normal};
    z-index: 1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    width: 48px;
    height: 48px;
    background-image: url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/%3E%3C/svg%3E");
    background-size: contain;
    opacity: 0;
    transition: all ${theme.transitions.normal};
    z-index: 2;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }

    &::before {
      opacity: 0.7;
    }

    &::after {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: ${theme.spacing["2xl"]};
`;

// To add your Instagram photos:
// 1. Save images from your Instagram posts to: public/images/instagram/
// 2. Name them post1.jpg, post2.jpg, etc.
// 3. Update the image paths and links below
const instagramPostsData = [
  {
    image: "/images/instagram/post1.jpg",
    link: "https://www.instagram.com/vikky_doch/reel/DSkcHthjOJO/",
  },
  {
    image: "/images/instagram/post2.jpg",
    link: "https://www.instagram.com/vikky_doch/",
  },
  {
    image: "/images/instagram/post3.jpg",
    link: "https://www.instagram.com/vikky_doch/",
  },
  {
    image: "/images/instagram/post4.jpg",
    link: "https://www.instagram.com/vikky_doch/",
  },
  {
    image: "/images/instagram/post5.jpg",
    link: "https://www.instagram.com/vikky_doch/",
  },
  {
    image: "/images/instagram/post6.jpg",
    link: "https://www.instagram.com/vikky_doch/",
  },
];

export default function Instagram() {
  const t = useTranslations();

  const instagramPosts = useMemo(
    () =>
      instagramPostsData.map((post, index) => ({
        id: index + 1,
        image: post.image,
        link: post.link,
        alt: `${t.instagram.postAlt} ${index + 1}`,
      })),
    [t.instagram.postAlt]
  );

  const { containerRef, visibleItems } = useStaggeredReveal(
    instagramPosts.length,
    100
  );

  return (
    <InstagramSection id="instagram">
      <Container>
        <SectionHeader>
          <SectionLabel>{t.instagram.label}</SectionLabel>
          <Title>{t.instagram.title}</Title>
          <Handle
            href="https://www.instagram.com/vikky_doch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon />
            {t.instagram.handle}
          </Handle>
        </SectionHeader>

        <InstagramGrid ref={containerRef}>
          {instagramPosts.map((post, index) => (
            <InstagramPost
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              $isVisible={visibleItems[index]}
              $index={index}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1280px) 33vw, 16vw"
              />
            </InstagramPost>
          ))}
        </InstagramGrid>

        <CTAWrapper>
          <ButtonLink
            href="https://www.instagram.com/vikky_doch/"
            target="_blank"
            rel="noopener noreferrer"
            $variant="outline"
          >
            {t.instagram.subscribeBtn}
          </ButtonLink>
        </CTAWrapper>
      </Container>
    </InstagramSection>
  );
}
