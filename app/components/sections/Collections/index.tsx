"use client";

import { useMemo } from "react";
import { Container } from "@/app/components/ui";
import { useTranslations } from "@/app/i18n";
import { CollectionsSection } from "./styles";
import {
  CollectionHeader,
  CollectionsGrid,
  CollectionsCTA,
} from "./components";

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

  return (
    <CollectionsSection id="collections">
      <Container>
        <CollectionHeader />
        <CollectionsGrid collections={collections} />
        <CollectionsCTA />
      </Container>
    </CollectionsSection>
  );
}
