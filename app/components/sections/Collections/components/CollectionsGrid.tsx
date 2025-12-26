import { useStaggeredReveal } from "@/app/hooks/useScrollReveal";
import { CollectionGrid } from "../styles";
import { CollectionCard } from "./CollectionCard";

type Collection = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

type CollectionsGridProps = {
  collections: Collection[];
};

export function CollectionsGrid({ collections }: CollectionsGridProps) {
  const { containerRef, visibleItems } = useStaggeredReveal(
    collections.length,
    150
  );

  return (
    <CollectionGrid ref={containerRef}>
      {collections.map((collection, index) => (
        <CollectionCard
          key={collection.id}
          title={collection.title}
          subtitle={collection.subtitle}
          image={collection.image}
          isVisible={visibleItems[index]}
          index={index}
        />
      ))}
    </CollectionGrid>
  );
}
