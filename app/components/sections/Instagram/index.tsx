"use client";

import { useMemo } from "react";
import { Container } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";
import { InstagramSection } from "./styles";
import { InstagramHeader, InstagramGrid, InstagramCTA } from "./components";

const instagramPostsData = [
  {
    image: "/images/instagram/preview1.jpg",
    link: "https://www.instagram.com/vikky_doch/reel/DSkn4EvjAF2/",
    position: "center",
  },
  {
    image: "/images/instagram/preview2.jpg",
    link: "https://www.instagram.com/vikky_doch/reel/DR1w1FYDORU/",
    position: "center",
  },
  {
    image: "/images/instagram/preview3.jpg",
    link: "https://www.instagram.com/vikky_doch/reel/DR_-URsjJ8D/",
    position: "top",
  },
  {
    image: "/images/instagram/preview4.jpg",
    link: "https://www.instagram.com/vikky_doch/reel/DR_-IkIjMe9/",
    position: "top",
  },
  {
    image: "/images/instagram/preview5.jpg",
    link: "https://www.instagram.com/vikky_doch/reel/DRyv5RyjXwI/",
    position: "center",
  },
  {
    image: "/images/instagram/preview6.jpg",
    link: "https://www.instagram.com/vikky_doch/reel/DR4ndDUDLF-/",
    position: "top",
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
        position: post.position || "center",
        alt: `${t.instagram.postAlt} ${index + 1}`,
      })),
    [t.instagram.postAlt]
  );

  return (
    <InstagramSection id="instagram">
      <Container>
        <InstagramHeader />
        <InstagramGrid posts={instagramPosts} />
        <InstagramCTA />
      </Container>
    </InstagramSection>
  );
}
